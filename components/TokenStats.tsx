import { useTranslation } from "next-i18next";
import styles from "./TokenStats.module.css";

export default function TokenStats() {
  const { t } = useTranslation("tokenStats");

  const price = 44787.4;
  const lastUpdated = "now";
  const marketCap = 850950000000;
  const usdVolume = 1790000000;
  const allVolume = 10160000000;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>
          <img src="/iconos/moneda.png" alt="" />
          Giat
        </h2>
        <div className={styles.divLine} />
        <div>
          <span className={styles.price}>
            <span className="dollarSign">$ </span>
            {price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className={styles.infoBelowPrice}>
          {t("lastUpdated")}: {t("time:" + lastUpdated)}
          <br />
          {t("marketCap")}: ${abbreviateNumber(marketCap)}
        </div>
        <div className={styles.spaceBeforeInfoBottom} />
        <div className={styles.infoBottom}>
          {t("usdVolume")}{" "}
          <span className={styles.infoBottomValue}>
            <span className="dollarSign">$ </span>
            {abbreviateNumber(usdVolume)}
          </span>
          <br />
          {t("allVol")}{" "}
          <span className={styles.infoBottomValue}>
            <span className="dollarSign">$ </span>
            {abbreviateNumber(allVolume)}
          </span>
        </div>
      </div>
    </div>
  );
}

function abbreviateNumber(n: number) {
  const units = { "": 1, K: 1000, M: 1000000, B: 1000000000 };
  let unit: keyof typeof units = "";
  for (const [letter, value] of Object.entries(units))
    if (value < n) unit = letter as keyof typeof units;
  return (
    (n / units[unit]).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
    " " +
    unit
  );
}
