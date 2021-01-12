import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pl">
        <Head >
            <meta name="description" content="Usługi elektryczne, instalacja fotowoltaiki oraz pomp ciepła. Profesjonalna firma z wieloletnim doświadczeniem." />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="icon" href="../public/assets/favicon.png" /> 
            <link rel="icon" type="image/png" sizes="16x16" href="../public/assets/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument