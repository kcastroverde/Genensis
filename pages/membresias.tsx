import PageAnimation from "@/components/PageAnimation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "@/styles/Membresias.module.css";
import Stalking from "@/components/Stalking";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "table"])),
    },
  };
}

export default function Membresias() {
  return (
    <PageAnimation>
      <div className={styles.stalking}>
        <ul>
          <li>
            <p>Todos</p>
          </li>
          <li>
            <p>Minado Diario</p>
          </li>
          <li>
            <p>Bonus</p>
          </li>
          <li>
            <p>Depósito</p>
          </li>
          <li>
            <p>Retiros</p>
          </li>
        </ul>
      </div>

      <Stalking/>
    </PageAnimation>
  );
}
