import styles from "./TopBar.module.css";
import TeamLink from "@/components/TeamLink";
import { useTranslation } from "next-i18next";

export default function TopBar() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.topBar}>
      <img className={styles.nameLogo} src="/logo.png" alt="" />
      <div className={styles.TopBarText}>
      <p>Enlace de referidos</p>
      <div className={styles.TopBarBottom}>
        <TeamLink
          label={t("Izquierdo").split(" ").join("\n")}
          url="https://OrbeStudios.com/team1"
          className ="TeamLink_labelTem1__XDxKj"
          img="personMas.svg"
          />
        <TeamLink
          label={t("Derecho").split(" ").join("\n")}
          url="https://OrbeStudios.com/team2"
          className ="TeamLink_labelTem2__ube_H"
          img="personMas2.svg"
        />
      </div>
      </div>
        <div className={styles.topTime}>
          
        <p>Horario de la Génesis</p>
        <div className={styles.topTimeProfile}>
          <div className={styles.topTimeHours}>
            <img src="/iconos/07_22.png" alt="" />
            <img src="/iconos/06_01_23.png" alt="" />
          </div>
          <button className={styles.iconBtn}>
            <img src="/iconos/perfil.png" alt={t("yourProfile") || ""} />
          </button>
          </div>
      </div>
      <div className={styles.topBarGroup}>
        
        {/*<button className={styles.iconBtn}>
          <img src="/iconos/notificacion.png" alt={t("notifications") || ""} />
        </button>*/}
      </div>
    </div>
  );
}
