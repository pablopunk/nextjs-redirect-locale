import { IncomingMessage } from 'http'

export function localeFromString(str: string, locales: Array<string>) {
  let partialMatch = locales[0]
  let exactMatch = null

  for (const locale in locales) {
    if (locale === str) {
      exactMatch = locale
      break
    } else if (str.startsWith(locale))
      partialMatch = locale
    }
  }

  if (exactMatch) {
    return exactMatch
  }

  return partialMatch
}

export function localeFromRequest(req: IncomingMessage, locales: Array<string>) {
  return localeFromString(req.headers['accept-language'], locales)
}

export function localeFromBrowser(locales: Array<string>) {
  return localeFromString(window?.navigator?.language || locales[0], locales)
}
