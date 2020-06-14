import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { localeFromBrowser, localeFromRequest } from './locales'

export default (locales: Array<string>) =>
  class extends React.Component<any, { url?: string }> {
    static async getInitialProps({ req, res }) {
      if (res?.writeHead) {
        const locale = localeFromRequest(req, locales)
        const url = '/' + locale

        res.writeHead(302, { Location: url })
        res.end()
        return {}
      }

      return {}
    }

    componentDidMount() {
      const locale = localeFromBrowser(locales)
      const url = '/' + locale

      this.setState({ url })
    }

    render() {
      if (!this.state?.url) {
        return <div />
      }

      const { url } = this.state

      Router.push(url)

      return (
        <>
          <Head>
            {/* Redirects with meta refresh if no JavaScript support */}
            <noscript>
              <meta httpEquiv="refresh" content={`0;url=${url}`} />
            </noscript>
          </Head>
          {/* Provides a redirect link if no meta refresh support */}
          <p>
            Redirecting to <a href={url}>{url}</a>&hellip;
          </p>
        </>
      )
    }
  }
