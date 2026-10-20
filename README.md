# Mood Meter

A private mood journal that runs entirely on your phone. No accounts, no servers, no tracking.

## What's in this folder

- `index.html` is the app itself.
- `manifest.webmanifest` tells phones it can be installed as an app.
- `sw.js` makes it work offline.
- `icons/` and `fonts/` are the app icon and the bundled fonts (with their licenses, the `OFL-*.txt` files).

Keep the folder structure exactly as it is.

## Put it online with GitHub Pages (free, no coding tools needed)

1. Make a free account at github.com.
2. Click **+** (top right), then **New repository**. Name it something like `mood-meter`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in everything from this folder, including the `icons` and `fonts` folders, and click **Commit changes**.
4. Go to the repo's **Settings**, then **Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, pick **main** and **/ (root)**, and click **Save**.
5. Wait a minute or two, then refresh that page. It shows your link, something like `https://yourname.github.io/mood-meter/`.

The files are public on GitHub, but that's just the app's code. Nobody's entries are ever stored there.

## Install it on a phone

- **iPhone:** open the link in Safari, tap the Share button, then **Add to Home Screen**.
- **Android:** open the link in Chrome, tap the ⋮ menu, then **Install app** (or **Add to Home screen**).

Share the same link with friends and they install it the same way. Each person's data stays on their own phone.

## Updating the app later

1. Upload the changed files to the repository (same names, same places).
2. Open `sw.js` and change the version (for example `mood-meter-v8` to `mood-meter-v9`). Do this every time.
3. The next time someone opens the app with a connection, a "New version ready" bar appears at the top. Tapping **Refresh** switches to the new version. If they ignore it, the update applies the next time the app is fully closed and reopened.

Updating never touches anyone's saved entries.

## Home screen shortcuts

On Android, long-press the app icon for shortcuts to Full screen, Simple view, Year in pixels and Patterns. (iPhones don't support these for web apps.)

## Good to know

- Data lives in the browser storage for this one site on this one device. Clearing the browser's site data, or deleting the app on some phones, erases it. **Settings > Export** makes a backup file, and **Import** brings it back or moves it to a new phone.
- On iPhone, the home screen app keeps its own storage, separate from Safari. Log from the installed app, not from a Safari tab.
