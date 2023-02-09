import PageAnimation from "@/components/PageAnimation";
import styles from "@/styles/Membresias.module.css";
import Stalking from "@/components/Stalking";




export default function Retiro() {
  return (
    <PageAnimation>
      <div className={styles.stalking}>
        <ul>
          <li>
            <p>Todos</p>
          </li>
          <li>
            <p>Minado Diario</p>
          </li>
          <li>
            <p>Bonus</p>
          </li>
          <li>
            <p>Depósito</p>
          </li>
          <li>
            <p>Retiros</p>
          </li>
        </ul>
      </div>

      <Stalking/>
    </PageAnimation>
  );
}
