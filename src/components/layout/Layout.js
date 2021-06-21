import { ProductPageLayout, Panel, ContentContainer } from "@navikt/ds-react";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const title = "Min side - prototyper";
  return (
    <main>
      <ProductPageLayout title={title}>
        <div className={styles.container}>{children}</div>
      </ProductPageLayout>
    </main>
  );
}
