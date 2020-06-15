# nextjs-redirect-locale

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/nextjs-redirect-locale"><img src="https://img.shields.io/npm/dt/nextjs-redirect-locale.svg?color=6c5ce7" /></a>
  <a href="https://packagephobia.now.sh/result?p=nextjs-redirect-locale"><img src="https://packagephobia.now.sh/badge?p=nextjs-redirect-locale"/></a>
</p>

<p align="center">
  <i>Redirect to corresponding locale. Works on client and server.</i>
</p>

## Install

```sh
npm install nextjs-redirect-locale
```

## Usage

Let's say you have a next.js project ([like this one](https://github.com/pablopunk/pablo.pink)) that creates one route per locale automatically, i.e. a page like `page/home.js` will be available in different languages with the following routes:

- `/en/home`
- `/es/home`
- `/gl/home`
- `/fr/home`
- `/fr_CA/home`

If you want to redirect to the proper locale once the user visits `/`, then you can create a `pages/index.js` with the following code:

```jsx
import redirectLocale from 'nextjs-redirect-locale'
export default redirectLocale(['en', 'es', 'gl', 'fr', 'fr_CA'])
```

Result: `/` redirects to `/es/` (if user locale is `es`)

Keep in mind the first locale is gonna be the default (i.e. the one that gets selected if the user locale is not on the list).

You can checkout this example live in [pablo.pink](https://pablo.pink/)

## Static export

This package is compatible with static exports via `next export` since version 2.0.0

## Related

- Custom redirects for NextJS: [nextjs-redirect](https://github.com/pablopunk/nextjs-redirect)

## License

MIT

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.pìnk)                                           |
