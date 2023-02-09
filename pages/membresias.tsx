import PageAnimation from "@/components/PageAnimation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "@/styles/Membresias.module.css";
import Stalking from "@/components/Stalking";
import TabBinaria from "@/components/NetworkTabs/Binaria";

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
           <TabBinaria/>

    </PageAnimation>
  );
}
