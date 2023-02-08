import styles from "@/styles/Home.module.css";
import ProgressBar from "@/components/ProgressBar";
import TokenStats from "@/components/TokenStats";
import RadialProgress from "@/components/RadialProgress";
import dynamic from "next/dynamic";
import PageAnimation from "@/components/PageAnimation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "time",
        "tokenStats",
      ])),
    },
  };
}

const AiFace = dynamic(() => import("@/components/AiFace/AiFace"), {
  ssr: false,
});

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <PageAnimation>
      <div className={styles.topRow}>
        <div className={styles.score}>
          <img src="/manos.png" alt="" />
          <div className={styles.card}>
            <div className={styles.cardGradient}>
              <div style={{ fontSize: "18px", lineHeight: 0.8 }}>
                {t("calificacion")}
              </div>
              <div style={{ fontSize: "28px" }}>{t("consultar")}</div>
            </div>
          </div>
        </div>
        <div className={styles.totalEarnings}>
          <img src="/cajaFuerte.png" alt="" />
          <div className={styles.card}>
            <div className={styles.totalEarningsTopText}>
              <h2>{t("totalEarnings")}</h2>
              {new Date().toLocaleDateString(undefined, { dateStyle: "long" })}
              <div className={styles.totalEarningsToday}>
                <span className="dollarSign">$ </span>0.00
              </div>
            </div>
            <div className={styles.cardGradient}>
              <div>
                <div style={{ fontSize: "18px" }}>{t("time:thisWeek")}</div>
                <div style={{ fontSize: "28px" }}>
                  <span className="dollarSign">$ </span>0.00
                </div>
              </div>
              <ProgressBar
                className={styles.progressBar}
                label={t("resetPuntoBinario")}
                completed={5}
                total={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.columns}>
        <div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("liInvested")}</div>
            <div className={styles.valueCardLine} />
            <div className={styles.valueCardValue}>
              0,00 U<span className="dollarSign">$</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("equipoMenor")}</div>
            <div className={styles.valueCardLine} />
            <div className={styles.valueCardValue}>0</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("weekEarnings")}</div>
            <div className={styles.valueCardLine} />
            <div className={styles.valueCardValue}>
              0,00 U<span className="dollarSign">$</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("liquidityWallet")}</div>
            <div className={styles.liquidityWalletAmount}>
              <div>
                <span className="dollarSign">$</span> 0.00
              </div>
              <img src="/iconos/wallet.png" alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("liquidityWallet")}</div>
            <div className={styles.liquidityWalletAmount}>
              <div>
                <span className="dollarSign">$</span> 0.00
              </div>
              <img src="/iconos/wallet.png" alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("teamVolume")}</div>
            <ul className={styles.teamVolume}>
              <li>
                <span className={styles.teamVolumeValue}>0</span>
                {t("left")}
              </li>
              <li>
                <span className={styles.teamVolumeValue}>0</span>
                {t("right")}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div style={{ height: "350px" }}>
            <AiFace />
          </div>
          <form className={styles.chatForm}>
            <input type="text" required />
            <button type="submit">
              <img src="/iconos/enviar.png" alt="Send" />
            </button>
          </form>
        </div>
        <div>
          <TokenStats />
          <div className={styles.card + " " + styles.percentEarnedCard}>
            <div>{t("percentEarned")}</div>
            <RadialProgress progress={0.95} />
            <div>{t("time:today")}</div>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}
