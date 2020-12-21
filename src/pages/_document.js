import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="fixed inset-0 w-full h-full">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (!('theme' in localStorage)) {
                    localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light'
                  }
                  if (localStorage.theme === 'dark') {
                    document.querySelector('html').classList.add('dark')
                  }
                } catch (_) {}
              `
                .replace(/\s+/g, '')
                .replace("'inlocal", "' in local"),
            }}
          />
        </Head>
        <body className="fixed inset-0 w-full h-full min-h-screen font-sans bg-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
