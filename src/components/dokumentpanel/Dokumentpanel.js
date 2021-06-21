import { ProductPageLayout, Panel, ContentContainer } from "@navikt/ds-react";
import { Download, File, FileFolder } from "@navikt/ds-icons";
import styles from "./Dokumentpanel.module.css";

export default function Dokumentpanel() {
  const tekst =
    "Ettersendelse til søknad om [sakstema] ved [situasjon] - ikke permitert.pdf";

  return (
    <Panel className={styles.dokumentpanel}>
      Innsendt av deg: 10.juni 2021
      <Panel className={styles.download__container}>
        <div className={styles.download__panel}>
          <File /> {tekst}
        </div>
        <Download />
      </Panel>
    </Panel>
  );
}
