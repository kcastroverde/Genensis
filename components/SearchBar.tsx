import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function SeachBar() {
  const { t } = useTranslation("common");
  const [inputContent, setInputContent] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <form
      className={
        styles.container +
        (inputContent || focused ? " " + styles.showInput : "")
      }
    >
      <label>
        <span className={styles.labelText}>{t("user")}</span>
        <input
          type="text"
          value={inputContent}
          onChange={(ev) => setInputContent(ev.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </label>
      <button type="submit">
        <img src="/iconos/lupa.png" alt="" />
        <span>{t("search")}</span>
      </button>
    </form>
  );
}
