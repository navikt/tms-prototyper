import { Alert, Panel } from "@navikt/ds-react";

export default function Brukernotifikasjoner() {
  return (
    <section>
      <header>
        <h2>Brukernotifikasjoner</h2>
      </header>
      <Panel>
        <Alert variant="info">Beskjed</Alert>
        <Alert variant="warning">Oppgave</Alert>
        <Alert variant="success">Statusoppdatering</Alert>
      </Panel>
    </section>
  );
}
