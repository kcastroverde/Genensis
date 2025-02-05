import styles from "@/styles/Home.module.css";
import ProgressBar from "@/components/ProgressBar";
import TokenStats from "@/components/TokenStats";
import RadialProgress from "@/components/RadialProgress";
import dynamic from "next/dynamic";
import PageAnimation from "@/components/PageAnimation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Slider, { Settings }  from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { RootState } from "@/data/store";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "@/data/data";
import { useEffect, useState } from "react";

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
   const data = useSelector((state: RootState) => state.data);
  // console.log("data", data);
  const [miningData, setMiningData]: any = useState({});

  const settings = {
    dots: true,
  };

  type DataState = {
    id: number;
    GHZ: number;
    claimed: Number;
  }

  const getMiningData = () => {
    let miningData:DataState = {
      id: 0,
      GHZ: 0,
      claimed: 0,
    }
    data.data.map((value) => {
      if (value.status) {
        miningData.GHZ += value.GHZ;
        miningData.claimed += value.claimed;
      }
    });
    setMiningData(miningData);
  }

    useEffect(() => {
      if(data.dataLoaded){
        getMiningData();
      }
    }, [data.dataLoaded]);

    
  return (
    
    <PageAnimation>
      <div className={styles.topRow}>
        <div className={styles.score}>
          <img src="/manos.png" alt="" />
          <div className={styles.card}>
            <div className={styles.cardGradient1}>
              <div style={{ fontSize: "18px", lineHeight: 0.8 }}>
                {t("Tu rango actual")}
              </div>
              <div style={{ fontSize: "28px" }}>{t("Start")}</div>
            </div>
          </div>
        </div>
        <div className={styles.totalEarnings}>
          <img src="/aaaaa.png" alt="" />
          <div className={styles.card}>
            <div className={styles.totalEarningsTopText}>
              <h2>{t("Total Minado")}</h2>
              {/*{new Date().toLocaleDateString(undefined, { dateStyle: "long" })}*/}
              <div className={styles.totalEarningsToday}>
               {/* <> <span className="dollarSign">$ </span>{miningData.claimed}</> */}
              </div>
            </div>
            <div >
              
            <div className={styles.cardGradient}>
              <div>
                <div style={{ fontSize: "18px" }}>{t("time:thisWeek")}</div>
                <div style={{ fontSize: "28px" }}>
                 <> <span className="dollarSign">$ </span>{} </>
                </div>
              </div>
                </div>
              <ProgressBar
                className={styles.progressBar}
                label={t("Final del ciclo binario")}
                completed={0}
                total={30}
                />
                </div>
            </div>
        </div>
      </div>
      <div className={styles.columns}>
        <div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{t("Total activo en mineria")}</div>
            {/*<div className={styles.valueCardLine} />*/}
            <div className={styles.valueCardValue}>
              0,00 <span className="dollarSign">U$</span>
            </div>
          </div>
          <div className={styles.cardDis}>
            <div className={styles.cardTitle}>{t("Disponible USDT")}</div>
            <div className={styles.valueCardLine} />
            <div className={styles.valueCardValue}>
              0,00 U<span className="dollarSign">$</span>
            </div>
              <button className={styles.CardBottonDis}>AUMENTAR MINERÍA</button>
              <button className={styles.CardBottonDis}>RETIRAR AIG TOKEN</button>
          </div>
          <div className={styles.cardDis}>
            <div className={styles.cardTitleWallet}>
            <div>
              <div className={styles.cardTitle}>{t("Staking")}</div>
              <div className={styles.valueCardValue}>
              <span className="dollarSign">$</span> 0,00
              </div>
            </div>
            <img src="/wallet.png" alt="" />
            </div>
            <button className={styles.CardBottonDis}>HACER STAKING</button>

          </div>
          
          {/*<div className={styles.card}>
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
          </div>*/}
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
          <div className={styles.cardDis}>
            <div className={styles.cardTitle}>{t("Puntos para binario")}</div>
            <div className={styles.valueCardLine} />
            <p>0</p>
          </div>
        </div>
        <div>
          <div style={{ height: "350px" }}>
            <AiFace />
          </div>
          <form className={styles.chatForm}>
            <input type="text" placeholder="¿En qué puedo ayudarte?" required />
            <button type="submit">
              <img src="/iconos/enviar.png" alt="Send" />
            </button>
          </form>
        </div>
        <div>
          <TokenStats />
          <div className={styles.card + " " + styles.percentEarnedCard}>
          <Slider {...settings}>

            <div>
              <div className={styles.cardPorcen}>{
              t(`Poder de Minado USD:`)}{miningData.GHZ}
              </div>
              <RadialProgress progress={0.75} />
              <div className={styles.cardPorcen}>{t("paquetes totales")}</div>
            </div>
            {/* {data.dataLoaded && (
              data.data.map((item, index) => (
                <div key={index}>
                  <div className={styles.cardPorcen}>
                    {t(`Poder de Minado USD:${item.GHZ}`)}
                    </div>
                  <RadialProgress progress={item.claimed/(item.GHZ * 2.5) } />
                  <div className={styles.cardPorcen}>{t(`paquete ${index + 1}`)}</div>
                </div>
              ))
            )} */}

          </Slider>
  
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}
