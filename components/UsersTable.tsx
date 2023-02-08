import { useTranslation } from "next-i18next";
import styles from "./UsersTable.module.css";

export default function UsersTable() {
  const { t } = useTranslation("table");

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>{t("dateRegistered")}</th>
          <th>{t("user")}</th>
          <th>{t("binarySide")}</th>
          <th>{t("status")}</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.linesRow}>
          <td>
            <div className={styles.hLine} />
            <div className={styles.vLine} />
          </td>
          <td>
            <div className={styles.vLine} />
          </td>
          <td>
            <div className={styles.vLine} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
