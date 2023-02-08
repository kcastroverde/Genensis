import PageAnimation from "@/components/PageAnimation";
import styles from "@/styles/Herramientas.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "tools"])),
    },
  };
}

interface ToolDescription {
  title: string;
  description: string;
  downloadLink: string;
}

export default function Herramientas() {
  const { t } = useTranslation("tools");

  const tools: ToolDescription[] = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: "Herramienta " + i,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    downloadLink: "/",
  }));
  return (
    <PageAnimation>
      <img className={styles.topIcon} src="/iconos/configuracion.png" alt="" />
      <ul className={styles.toolsList}>
        {tools.map(({ title, description, downloadLink }) => (
          <li key={title + "`" + description + "`" + downloadLink}>
            <div className={styles.toolInner}>
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={downloadLink} rel="noreferrer" target="_blank">
                {t("download")}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </PageAnimation>
  );
}
