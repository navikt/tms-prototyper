import Layout from "../components/layout/Layout";
import "../globals.css";
import "@navikt/ds-css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
