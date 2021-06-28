import { Alert, Panel, LinkPanel, Title, Ingress } from "@navikt/ds-react";
import styles from "../../components/linkpanels/Linkpanels.module.css";

export default function Brukernotifikasjoner() {
  return (
    <section>
      <LinkPanel
        className={styles.linkpanel}
        href="/prototyper/brukernotifikasjoner/ingen-nye"
      >
        Ingen nye varlser
      </LinkPanel>
      <LinkPanel
        className={styles.linkpanel}
        href="/prototyper/brukernotifikasjoner/kun-ett"
      >
        Kun ett varsel
      </LinkPanel>
      <LinkPanel
        className={styles.linkpanel}
        href="/prototyper/brukernotifikasjoner"
      >
        Flere varsler
      </LinkPanel>
      <LinkPanel
        className={styles.linkpanel}
        href="/prototyper/brukernotifikasjoner/dinosaur"
      >
        Dinosaur
      </LinkPanel>
    </section>
  );
}
