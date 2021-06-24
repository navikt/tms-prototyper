import Document, { Html, Head, Main, NextScript } from "next/document";
import { fetchDecoratorReact } from "@navikt/nav-dekoratoren-moduler/ssr";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const decorator = await fetchDecoratorReact({
      env: "prod",
    });

    return { ...initialProps, decorator };
  }

  render() {
    const { Styles, Scripts, Header, Footer } = this.props.decorator;
    return (
      <Html>
        <Head>
          <Styles />
          <Scripts />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
