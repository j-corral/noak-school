import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
// import { EmotionStyle } from '@hoomies/noak.lib.emotion-style';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    //const styles = EmotionStyle(initialProps);
    return {
      ...initialProps,
      //styles: styles,
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta charSet="UTF-8" />
          {/* <meta content="ie=edge" httpEquiv="X-UA-Compatible" /> */}

          {/* required google fonts preconnect tags */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
        </body>
      </Html>
    );
  }
}
