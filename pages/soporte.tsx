import PageAnimation from "@/components/PageAnimation";
import styles from "@/styles/Soporte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ChangeEvent, MouseEvent, useRef } from "react";
import TabBinaria from "@/components/NetworkTabs/Binaria";
import Retiro from "./retiro";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
}

const REASONS = ["changeEmail", "bugReport"];

export default function Soporte() {
  const { t } = useTranslation("support");
  const selectMouseDown = useRef(false);

  return (
    <PageAnimation>
            <Retiro/>

      {/*<div className={"largeCard " + styles.container}>
        <div className={styles.innerContainer}>
          <form>
            <label htmlFor="support-reason" style={{ pointerEvents: "none" }}>
              {t("title")}
            </label>
            <div className={styles.inputBorder}>
              <select
                id="support-reason"
                onMouseDown={(ev: MouseEvent<HTMLSelectElement>) => {
                  selectMouseDown.current = true;
                }}
                onMouseUp={(ev) => {
                  if (!selectMouseDown.current) {
                    ev.currentTarget.blur();
                  }
                  selectMouseDown.current = false;
                }}
                onChange={(ev: ChangeEvent<HTMLSelectElement>) =>
                  ev.currentTarget.blur()
                }
              >
                {REASONS.map((r) => (
                  <option
                    onClick={(ev) => ev.currentTarget.parentElement?.blur()}
                    key={r}
                    value={r}
                  >
                    {t("reasons." + r)}
                  </option>
                ))}
              </select>
              <img
                className={styles.dropdownIcon}
                src="/iconos/dobleFlecha.png"
                alt=""
              />
            </div>
            <label htmlFor="support-message">{t("messageInputLabel")}</label>
            <div className={styles.inputBorder}>
              <textarea
                id="support-message"
                required
                maxLength={8000}
                rows={8}
                placeholder={t("messagePlaceholder") || ""}
              />
            </div>
            <button type="submit">
              <span>{t("submitBtn")}</span>
            </button>
          </form>
          <aside>{t("bottomText")}</aside>
        </div>
      </div>*/}
    </PageAnimation>
  );
}
