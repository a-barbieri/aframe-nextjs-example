// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { renderScene } from "../aframe/base";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
        </Head>
        <body className="custom_class">
        {renderScene()}
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
