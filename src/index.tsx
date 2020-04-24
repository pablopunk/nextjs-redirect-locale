import React from 'react'
import Router from 'next/router'
import { localeFromBrowser, localeFromRequest } from './locales'

export default (locales: Array<string>) =>
  class extends React.Component {
    static async getInitialProps({ req, res }) {
      if (res) {
        const locale = localeFromRequest(req, locales)
        const redirectUrl = '/' + locale

        res.writeHead(302, { Location: redirectUrl })
        res.end()
      } else {
        const locale = localeFromBrowser(locales)
        const redirectUrl = '/' + locale

        Router.push(redirectUrl)
      }

      return {}
    }
    render() {
      return React.createElement('div')
    }
  }
