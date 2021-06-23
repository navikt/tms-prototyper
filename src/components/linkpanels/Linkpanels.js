import { ProductPageLayout, LinkPanel } from "@navikt/ds-react";
import styles from "./Linkpanels.module.css";

export default function Linkpanels() {
  return (
    <section id={styles.linkpanels}>
      <LinkPanel
        className={styles.linkpanel}
        href="/person/tms-prototyper/brukernotifikasjoner"
      >
        Brukernotifikasjoner
      </LinkPanel>
      <LinkPanel
        className={styles.linkpanel}
        href="/person/tms-prototyper/dokumenter"
      >
        Dokumenter
      </LinkPanel>
    </section>
  );
}
