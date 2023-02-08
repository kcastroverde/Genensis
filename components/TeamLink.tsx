import styles from "./TeamLink.module.css";

export interface TeamLinkProps {
  label: string;
  url: string;
}

export default function TeamLink({ label, url }: TeamLinkProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.label}>{label}</div>
        <div className={styles.url}>{url}</div>
      </div>
    </div>
  );
}
