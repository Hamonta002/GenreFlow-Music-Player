# 🎵 GenreFlow Music Player

> A genre-based online music & radio player for Chrome and Edge — no Spotify Premium required.

**Version:** 3.1.0 · **Manifest:** V3 · **Platform:** Chrome / Edge Side Panel

---

## ✨ Overview

GenreFlow is a browser extension that streams free music directly from your browser's side panel. It pulls content from multiple open catalogs — independent music, live radio, and Creative Commons tracks — and keeps playing seamlessly in the background even when you close the panel or switch tabs.

This version adds dedicated **Bangla** and **Hindi** genre support, making it easier to discover South Asian music through Audius and Live Radio.

---

## 🎧 Music Sources

| Source | Description |
|---|---|
| **Audius** | Free song-level streaming from a large catalog of independent artists |
| **Live Radio** | Thousands of internet radio stations powered by Radio Browser |
| **Jamendo** | Independent & Creative Commons music *(requires a free API client ID)* |
| **Relaxation** | Curated ambient audio — Rain, Ocean, Forest, Meditation, Sleep, Ambient, Thunder |

---

## 🌏 Bangla & Hindi Music

This version includes **Bangla** and **Hindi** as dedicated genre options in both Audius search and Live Radio.

**Tips for best results:**
- For **Bangla** music → select the **Bangla** genre + set the radio country filter to **Bangladesh**
- For **Hindi** music → select the **Hindi** genre + set the radio country filter to **India**

This combination gives the strongest and most relevant radio station results.

---

## 🌿 Relaxation Mode

Relaxation mode transforms the player into a calming experience:

- 🎨 **Teal visual theme** — softer, ambient color palette
- 🧘 **Mood-based discovery** — pick a mood and let GenreFlow find matching audio
- ⏱️ **Sleep timer** — press **Timer: Off** to cycle through **15 → 30 → 45 → 60 → 90 → 120 minutes**
- 🔢 **Custom timer** — type any duration (in minutes) into the **Custom sleep timer** field and press **Set** or **Enter**

> The timer runs inside the background audio document, so it correctly stops playback even after you close the side panel.

---

## 🔁 Background Playback

Audio is hosted in a **Chrome Offscreen Document** using the `AUDIO_PLAYBACK` reason (Manifest V3). The side panel acts only as a controller — the audio document stays alive independently, so music never cuts out when you:

- Close the side panel
- Switch tabs
- Navigate to a new page

---

## 🌍 Radio — Country Filtering & Bookmarks

Filter live radio by country. Supported regions include:

**Asia** — Bangladesh, Japan, China, South Korea, India, Pakistan, Indonesia, Malaysia, Thailand, Vietnam, Philippines, Taiwan, Hong Kong

**Americas** — United States, Canada, Mexico, Brazil, Argentina, Chile, Colombia

**Europe** — United Kingdom, Ireland, Germany, France, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Austria, Poland, Russia, Türkiye, Greece, Norway, Sweden, Finland, Denmark

**Other** — Australia, New Zealand, South Africa, Nigeria, Kenya, United Arab Emirates

> Select **All Countries** to remove the filter and browse the full global catalog.

### ❤️ Bookmarks

Click the **heart icon** on any song or station to save it. Bookmarks are stored locally in your browser and can be replayed anytime from the **Bookmarks** section.

---

## 🔧 Jamendo Setup

1. Visit [Jamendo Developers](https://developer.jamendo.com/) and create a free account.
2. Create a new developer application and copy the **Client ID**.
3. Open GenreFlow → click **⚙️ Settings** → paste the Client ID.

The ID is stored locally in your browser using `chrome.storage` and is never sent anywhere else.

---

## 🚀 Install Locally

1. Open **`chrome://extensions`** in Chrome — or **`edge://extensions`** in Edge.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select this project folder.
5. Click the GenreFlow icon in the toolbar to **open the side panel**.
6. Pick a **Source** and a **Genre / Mood**, then press **Play**.

---

## 📁 Project Structure

```
GenreFlow-extension-v15-bangla-hindi/
├── manifest.json       # Extension manifest (MV3)
├── background.js       # Service worker — opens side panel on click
├── offscreen.html      # Offscreen document host for audio
├── offscreen.js        # Audio playback logic & sleep timer
├── sidepanel.html      # Side panel UI markup
├── sidepanel.js        # UI logic, genres (incl. Bangla & Hindi), bookmarks
├── sidepanel.css       # Styles & Relaxation theme
└── icon*.png / *.svg   # Extension icons
```

---

## ⚠️ Limitations

- The Audius and Jamendo catalogs focus on **independent artists** and may not include mainstream catalog tracks.
- Individual streams may occasionally be unavailable — press **Next** or **Refresh** to skip.
- An **active internet connection** is required for all sources.
- Bangla/Hindi Audius results depend on what independent artists have tagged in the Audius catalog.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Chrome Extensions Manifest V3 | Extension platform |
| Offscreen Documents API | Background audio playback |
| Side Panel API | Persistent browser sidebar UI |
| Radio Browser API | Live radio station catalog |
| Audius API | Independent music streaming |
| Jamendo API | Creative Commons music *(optional)* |

---

## 📄 License

This project is provided as-is for personal use. Third-party service usage is subject to the respective terms of [Audius](https://audius.co/), [Radio Browser](https://www.radio-browser.info/), and [Jamendo](https://www.jamendo.com/).
