import { log } from "console";
import styles from "./TeamLink.module.css";

export interface TeamLinkProps {
  label: string;
  url: string;
  className :string;
  img: string;
}

export default function TeamLink({ label, url, className, img  } : TeamLinkProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={className}>
          <img src={`/iconos/${img}`} alt="" />
          {label}
          </div>
        {/*<div className={styles.class}>{url}</div>*/}
      </div>
    </div>
  );
}
