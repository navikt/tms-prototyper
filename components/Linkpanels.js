import { ProductPageLayout, LinkPanel } from "@navikt/ds-react";
import styles from "../styles/Linkpanels.module.css";

export default function Linkpanels() {
  return (
    <section id={styles.linkpanels}>
      <LinkPanel className={styles.linkpanel} href="/brukernotifikasjoner">
        Brukernotifikasjoner
      </LinkPanel>
      <LinkPanel className={styles.linkpanel} href="/dokumenter">
        Dokumenter
      </LinkPanel>
    </section>
  );
}
