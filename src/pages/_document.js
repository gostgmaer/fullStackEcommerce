import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/> */}
      </Head>
      <body>
        <main> <Main />
          <NextScript />
        </main>

        <ToastContainer />
      </body>
    </Html>
  )
}
