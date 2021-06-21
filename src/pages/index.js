import Head from "next/head";
import Layout from "../components/layout/Layout";
import Linkpanels from "../components/linkpanels/Linkpanels";
import { Link, LinkPanel, Panel } from "@navikt/ds-react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Min side - prototyper</title>
      </Head>
      <Linkpanels />
    </div>
  );
}
