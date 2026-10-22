# Perm's Hair Salon

A responsive, single-page salon website built with plain HTML, CSS and JavaScript. The project has no build step or third-party JavaScript dependencies and is ready to publish with GitHub Pages.

## Run locally

Open `index.html` in a browser, or run a local server from this folder:

```powershell
py -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). If the `py` launcher is unavailable, use `python -m http.server 8000`.

## Edit example prices

Open `script.js` and edit the `hairstyleExamples` list near the top. Each style has a `price` value in rand. All displayed amounts are explicitly identified as examples and are not confirmed salon prices. Update the price notice in `index.html` if the pricing approach changes.

## Update business details

Edit the phone number and WhatsApp link in `index.html` and `script.js` if they change. The opening times, email and social link are still placeholders until the salon confirms them; update those details in `index.html` when available.

## Publish with GitHub Pages

Push the site files to the repository's default branch, then open **Settings → Pages** on GitHub. Choose **Deploy from a branch**, select the default branch and the `/ (root)` folder, and save. GitHub Pages will publish `index.html` at the repository's Pages URL.

The website uses Google Fonts and photography hosted by Pexels, so those assets require an internet connection. Replace the sample photography with salon-owned images before launch if available.