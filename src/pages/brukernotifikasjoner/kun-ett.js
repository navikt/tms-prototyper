import {
  Alert,
  Panel,
  LinkPanel,
  Link,
  Title,
  Ingress,
} from "@navikt/ds-react";
import styles from "../../components/linkpanels/Linkpanels.module.css";

export default function KunEtt() {
  return (
    <section>
      <Panel>
        <Alert variant="info">Beskjed</Alert>
        <Alert variant="warning">Oppgave</Alert>
        <Alert variant="success">Statusoppdatering</Alert>
      </Panel>
    </section>
  );
}
