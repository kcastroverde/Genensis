import styles from "./Layout.module.css";
import TopBar from "@/components/TopBar";
import SideNav from "@/components/SideNav";
import { PropsWithChildren } from "react";
import { useTranslation } from "next-i18next";

export default function Layout({ children }: PropsWithChildren) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.everythingContainer}>
      <TopBar />
      <SideNav />
      <div className={styles.mainAndNavContainer}>
      
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.spaceBeforeFooter} />
      <footer className={styles.footer}>{t("copyright")}</footer>
    </div>
  );
}
