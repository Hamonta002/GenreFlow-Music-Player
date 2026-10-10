chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab?.windowId) await chrome.sidePanel.open({ windowId: tab.windowId });
});

const offscreenUrl = chrome.runtime.getURL('offscreen.html');
let creating;

async function ensureOffscreen() {
  const contexts = chrome.runtime.getContexts ? await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'], documentUrls: [offscreenUrl] }) : [];
  if (contexts.length) return;
  if (creating) return creating;
  creating = chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'Keep online music playing when the side panel is closed.'
  }).finally(() => { creating = null; });
  return creating;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.target === 'background-status') {
    chrome.runtime.sendMessage({ ...message, target: 'sidepanel' }).catch(() => {});
    return;
  }
  if (!message?.target || message.target !== 'background') return;
  (async () => {
    await ensureOffscreen();
    if (message.type === 'GET_STATE') {
      const response = await chrome.runtime.sendMessage({ ...message, target: 'offscreen' });
      sendResponse(response);
      return;
    }
    await chrome.runtime.sendMessage({ ...message, target: 'offscreen' });
    sendResponse({ ok: true });
  })().catch(error => sendResponse({ ok: false, error: error.message }));
  return true;
});
