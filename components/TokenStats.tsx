import { useTranslation } from "next-i18next";
import styles from "./TokenStats.module.css";

export default function TokenStats() {
  const { t } = useTranslation("tokenStats");

  const price = 0;
  const lastUpdated = "now";
  const marketCap = 0 ;
  const usdVolume = 0;
  const allVolume = 0;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>
          <img src="/iconos/moneda.png" alt="" />
          AIG Token
        </h2>
        <div className={styles.divLine} />
        <div>
          <span className={styles.price}>
            <span className="dollarSign">$ </span>
            {price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className={styles.infoBelowPrice}>
          <p>{t("lastUpdated")}: <span>{t("time:" + lastUpdated)}</span>  <span className="dollarSign">(+0)</span></p>
          
          <p> {t("marketCap")}: <span>${abbreviateNumber(marketCap)}</span> </p>
                   
        </div>
        <button className={styles.CardBottonDis}>MINAR AHORA</button>

        <div className={styles.spaceBeforeInfoBottom} />
        <div className={styles.infoBottom}>
          {t("Volumen de hoy")}{" "}
          <span className={styles.infoBottomValue}>
            <span className="dollarSign">$ </span>
            {abbreviateNumber(usdVolume)}
          </span>
          <br />
          {t("Capitalización")}{" "}
          <span className={styles.infoBottomValue}>
            <span className="dollarSign">$ </span>
            {abbreviateNumber(allVolume)}
          </span>
          <br />
          {t("Quema total")}{" "}
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
