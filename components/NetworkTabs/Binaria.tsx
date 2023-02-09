import SeachBar from "../SearchBar";
import styles from "./Binaria.module.css";
import dynamic from "next/dynamic";
import { BinaryNetworkNode } from "./BinaryNetworkVisualizer";
import { useTranslation } from "next-i18next";
import PageAnimation from "../PageAnimation";

const BinaryNetworkVisualizer = dynamic(
  () => import("./BinaryNetworkVisualizer"),
  {
    ssr: false,
  }
);

export default function TabBinaria() {
  const { t } = useTranslation("myNetwork");
  //const binaryNetwork: BinaryNetworkNode = genTree(3);

  return (
    <PageAnimation>
      <div className={styles.container}>
        <div>
          <div className={styles.topCard}>
            {/*<div className={styles.hLine} />*/}
            <div className="">
              <img src="" alt="" />
              <div className={styles.spanRang}>
                <p>Puntos rango</p>
                <span>0</span>
              </div>
            </div>
            <div className={styles.rangImg}>
              <img src="/iconos/miRed.png" alt="" />
              <div className={styles.spanRang}>
                <p>Binario</p>
                <span>Activo</span>
              </div>
            </div>
            <div className={styles.rangImg}>
              <img src="/iconos/evento.png" alt="" />
              <div className={styles.spanRang}>
                <p>Ciclo</p>
                <span>14 Dias y 22 hrs</span>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchBinaria}>
          <div className={styles.sectionBinaria}>
            <div className={styles.sectionBinariaG}>
              <p>G11</p>
            </div>
            <input type="search" placeholder="Buscar Usuario"/>
          </div>
          <button className={styles.CardBottonDis}>Miembros directos</button>
        </div>
        <div>
          <div className={styles.mainCard}>
            <div className={styles.teamsInfoSection}>
              <div className={styles.teamInfo}>
            
                <div className={styles.teamInfoText}>
                  {/*<h3>{t("common:leftTeam")}</h3>*/}

                  <div className={styles.teamStats}>
                  <img src="/iconos/contornoizquierda.png" alt="" />
                    <div className={styles.scoreTeams}>
                      <p>{t("Total puntos")}</p> 
                      <span className={styles.statValue}>0</span>

                    </div>
                    <div className={styles.scoreTeams}>
                      <p>{t("Disponible")}:{" "}</p>       <span className={styles.statValue}>0</span>
                    </div>

                    <div className={styles.scoreTeams}>
                    <p>{t("Cuentas activas")}:{" "}</p>          <span className={styles.statValue}>0</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className={styles.teamInfo + " " + styles.rightTeam}>
                <div className={styles.teamInfoText}>
                  {/*<h3>{t("common:rightTeam")}</h3>*/}
                  <div className={styles.teamStats}>
                    <div className={styles.scoreTeams}>
                      <p>{t("Total puntos")}</p> 
                      <span className={styles.statValue}>0</span>

                    </div>
                    <div className={styles.scoreTeams}>
                      <p>{t("Disponible")}:{" "}</p>       <span className={styles.statValue}>0</span>
                    </div>

                    <div className={styles.scoreTeams}>
                    <p>{t("Cuentas activas")}:{" "}</p>  
                    <span className={styles.statValue}>0</span>
                    </div>

                  <img src="/iconos/contornodelgado-izquierda.png" alt="" />
                  </div>
                </div>
                {/*<div className={styles.iconWithGlow}>
                  <img src="/iconos/dobleFlecha.png" alt="" />
                </div>*/}
              </div>
              <div className={styles.hLine} />
            </div>
            <div className={styles.base}>
              <div className={styles.buttonline}>
                <button>Subir</button>
                <button>Bajar</button>
              </div>
            </div>
            {/*<BinaryNetworkVisualizer rootNode={binaryNetwork} />*/}
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

//function genTree(depth: number): BinaryNetworkNode {
//  //const root: BinaryNetworkNode = { name: "Usuario" };
//  //let currentLevel: BinaryNetworkNode[] = [root];
//  //for (let i = 0; i < depth; i++) {
//  //  const newLevel = [];
//  //  for (const node of currentLevel) {
//  //    node.left = { name: "Usuario" };
//  //    node.right = { name: "Usuario" };
//  //    newLevel.push(node.left, node.right);
//  //  }
//  //  currentLevel = newLevel;
//  //}
//  //return root;
//}
