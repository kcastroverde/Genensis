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
  const binaryNetwork: BinaryNetworkNode = genTree(3);

  return (
    <PageAnimation>
      <div className={styles.container}>
        <div className={"largeCard"}>
          <div className={styles.topCard}>
            <div className={styles.hLine} />
            <SeachBar />
            <img className={styles.handsImg} src="/manos2.png" alt="" />
            <div className={styles.binaryYes}>
              <span>{t("binary")}</span>
              <span>{t("common:yes")}</span>
            </div>
          </div>
        </div>
        <div className={"largeCard "}>
          <div className={styles.mainCard}>
            <div className={styles.teamsInfoSection}>
              <div className={styles.teamInfo}>
                <div className={styles.iconWithGlow}>
                  <img src="/iconos/dobleFlecha.png" alt="" />
                  <img src="/iconos/dobleFlecha.png" alt="" />
                </div>
                <div className={styles.teamInfoText}>
                  <h3>{t("common:leftTeam")}</h3>
                  <div className={styles.teamStats}>
                    {t("score")}: <span className={styles.statValue}>0</span>
                    <br />
                    {t("activeUsers")}:{" "}
                    <span className={styles.statValue}>0</span>
                    <br />
                    {t("totalScore")}:{" "}
                    <span className={styles.statValue}>0</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className={styles.teamInfo + " " + styles.rightTeam}>
                <div className={styles.teamInfoText}>
                  <h3>{t("common:rightTeam")}</h3>
                  <div className={styles.teamStats}>
                    {t("score")}: <span className={styles.statValue}>0</span>
                    <br />
                    {t("activeUsers")}:{" "}
                    <span className={styles.statValue}>0</span>
                    <br />
                    {t("totalScore")}:{" "}
                    <span className={styles.statValue}>0</span>
                    <br />
                  </div>
                </div>
                <div className={styles.iconWithGlow}>
                  <img src="/iconos/dobleFlecha.png" alt="" />
                  <img src="/iconos/dobleFlecha.png" alt="" />
                </div>
              </div>
              <div className={styles.hLine} />
            </div>
            <BinaryNetworkVisualizer rootNode={binaryNetwork} />
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

function genTree(depth: number): BinaryNetworkNode {
  const root: BinaryNetworkNode = { name: "Usuario" };
  let currentLevel: BinaryNetworkNode[] = [root];
  for (let i = 0; i < depth; i++) {
    const newLevel = [];
    for (const node of currentLevel) {
      node.left = { name: "Usuario" };
      node.right = { name: "Usuario" };
      newLevel.push(node.left, node.right);
    }
    currentLevel = newLevel;
  }
  return root;
}
