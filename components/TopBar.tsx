import styles from "./TopBar.module.css";
import TeamLink from "@/components/TeamLink";
import { useTranslation } from "next-i18next";

export default function TopBar() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.topBar}>
      <img className={styles.nameLogo} src="/logoNombre.png" alt="" />
      <TeamLink
        label={t("leftTeam").split(" ").join("\n")}
        url="https://OrbeStudios.com/team1"
      />
      <TeamLink
        label={t("rightTeam").split(" ").join("\n")}
        url="https://OrbeStudios.com/team2"
      />
      <div className={styles.topBarGroup}>
        <button className={styles.iconBtn}>
          <img src="/iconos/notificacion.png" alt={t("notifications") || ""} />
        </button>
        <button className={styles.iconBtn}>
          <img src="/iconos/perfil.png" alt={t("yourProfile") || ""} />
        </button>
      </div>
    </div>
  );
}
