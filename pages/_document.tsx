import React, { ReactElement } from 'react';
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props>  {
    static async getInitialProps (ctx: DocumentContext){
    const sheet = new ServerStyleSheet();
    
    const page = await ctx.renderPage((App) => (props): ReactElement => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body style={{margin: 0}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
