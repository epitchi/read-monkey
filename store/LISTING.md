# Chrome Web Store listing — Read Monkey

Everything the Developer Dashboard asks for, in the order it asks. Upload package:
`.output/read-monkey-<version>-chrome.zip` (`pnpm zip`).

## 0. Before submitting — GPL

Read Monkey is a GPL-3.0 fork of Read Monkey. Distributing it (a store listing is distribution)
requires offering the source: **make `github.com/epitchi/read-monkey` public first.** The short
description also says "open source", which is only true once it is. The server repo
(`read-monkey-server`) is separate code and can stay private.

## 1. Store listing

**Name** (from the package): `Read Monkey - Translate & Learn`

**Summary** (from the package, 109/132 chars):
Read Monkey is an open source browser extension designed to help you learn languages deeply from any website.

**Description:**

```
Read Monkey helps you read the web in a foreign language — and learn it while you read.

• Bilingual page translation: the translation appears under each paragraph, so you can compare the original and the translation side by side. Or switch to translation only.
• Select any text to translate it, hear it read aloud, or run your own AI action — for example a learner's dictionary that explains a word at your level.
• YouTube subtitles in two languages at once, with styles you can customize.
• Translate what you type: press Space three times in any text box.
• Free translation with Google and Microsoft, or connect 20+ AI providers (OpenAI, Gemini, DeepSeek, Claude, Ollama and any OpenAI-compatible API) with your own key.
• Custom prompts, glossaries per website, and batch requests that cut AI costs.
• Notebases: save the words you look up and review them as flashcards on a spaced-repetition schedule at read-monkey.epitchi.com.

The extension is free. An optional Pro or Ultra plan adds Built-in AI that needs no API key, plus unlimited notes and reviews.

Read Monkey is open source (GPL-3.0), based on Read Monkey.
Support: thienvanlea1@gmail.com
```

**Category:** Education · **Language:** English

**Graphics** (this folder):

- Icon 128×128: `icon-128.png`
- Screenshots 1280×800: `1-page-translation.png`, `2-selection-toolbar.png`, `3-flashcards.png`, `4-popup.png`, `5-notebase.png`
- Small promo tile 440×280: `promo-small-440x280.png`

**Website:** `https://read-monkey.epitchi.com` · **Support:** `thienvanlea1@gmail.com`

## 2. Privacy practices

**Single purpose:**

```
Help users read and learn foreign languages on web pages: translate page text, selected text, typed text and video subtitles, and save words to review.
```

**Permission justifications:**

| Permission                | Justification                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `storage`                 | Saves the user's settings, translation cache and glossaries.                                                                                         |
| `unlimitedStorage`        | Glossaries and the translation cache live in IndexedDB and can exceed the default quota; the glossary is user-written data that must not be evicted. |
| `tabs`                    | Reads the active tab's URL to apply per-site rules and opens the options and Translation Hub pages.                                                  |
| `alarms`                  | Runs hourly config backups and periodic cache cleanup.                                                                                               |
| `cookies`                 | Reads the Read Monkey login cookie on read-monkey.epitchi.com so the extension knows which account is signed in. No other site's cookies are read.   |
| `contextMenus`            | Adds "Translate" and "Read aloud" to the right-click menu.                                                                                           |
| `identity`                | Signs in to Google for the optional Google Drive sync of settings, only when the user starts it.                                                     |
| `scripting`               | Injects the translation script into frames the declared content scripts do not reach.                                                                |
| `webNavigation`           | Detects in-page navigations and new frames so translation continues on single-page sites.                                                            |
| `offscreen`               | Plays text-to-speech audio from the background.                                                                                                      |
| `sidePanel`               | Shows Read Monkey in the browser side panel.                                                                                                         |
| Host permission `*://*/*` | Translates text on any page the user chooses to read, and calls the translation or AI service the user selected.                                     |

**Remote code:** No, I am not using remote code.

**Data usage** — tick:

- **Personally identifiable information** (name, email) — only if the user creates an account.
- **Authentication information** (password, stored hashed on our server).
- **Website content** — text the user translates is sent to the translation provider the user selected.

Leave every other category unticked. Tick all three certifications (not sold, not used for
unrelated purposes, not used for creditworthiness).

**Privacy policy URL:** `https://read-monkey.epitchi.com/privacy`

## 3. Distribution

Visibility **Public**, all regions, free.

## Known gaps a reviewer could hit

- **Google Drive sync** needs our own OAuth client (`WXT_GOOGLE_CLIENT_ID`); without it the sync
  button fails. The `identity` permission is still used by that code path.
- **AI subtitles** are not available yet (the server answers "not implemented").
- **Paid plans** stay closed until Creem verifies the store (`BILLING_OPEN` in the server).
