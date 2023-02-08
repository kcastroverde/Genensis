import styles from "./RadialProgress.module.css";

export interface RadialProgressProps {
  progress: number;
}

export default function RadialProgress({ progress }: RadialProgressProps) {
  return (
    <div className={styles.skill}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div>{Math.floor(progress * 100)}%</div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="190px"
        height="190px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#ea18ed" />
            <stop offset="100%" stopColor="#19fbff" />
          </linearGradient>

          <filter
            id="neon-glow"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1"
              result="blur1"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blur3"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur4"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur5"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="8"
              result="blur8"
            />
            <feMerge result="blur-merged">
              <feMergeNode in="blur3" />
              <feMergeNode in="blur4" />
              <feMergeNode in="blur5" />
              <feMergeNode in="blur8" />
            </feMerge>
            <feColorMatrix
              result="cyan-blur"
              in="blur-merged"
              type="matrix"
              values="0.09 0   0   0   0
                          0   0.76  0   0   0
                          0   0   0.70  0   0
                          0   0   0   1   0 "
            />
            <feMerge>
              <feMergeNode in="cyan-blur" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="95"
          cy="95"
          r="75"
          strokeDashoffset={470 * (1 - progress) + 10}
        />
      </svg>
    </div>
  );
}
