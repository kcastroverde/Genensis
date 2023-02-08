import styles from "./ProgressBar.module.css";

export interface ProgressBarProps {
  className?: string;
  label: string;
  completed: number;
  total: number;
}

export default function ProgressBar({
  className,
  label,
  completed,
  total,
}: ProgressBarProps) {
  return (
    <div className={className}>
      <div className={styles.textLine}>
        <div>{label}</div>
        <div>
          {completed}/{total}
        </div>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.filled}
          style={{ width: (completed / total) * 100 + "%" }}
        />
      </div>
    </div>
  );
}
