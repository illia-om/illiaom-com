import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inconsolata"
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}