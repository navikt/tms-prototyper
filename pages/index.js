import Head from "next/head";
import Layout from "../components/Layout";
import Linkpanels from "../components/Linkpanels";
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
