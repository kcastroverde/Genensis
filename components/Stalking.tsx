import styles from "./Stalking.module.css";

export default function Stalking() {

  return (
 <div className={styles.Stalking}>
    <div className={styles.StalkingGroup}>
      <div className={styles.StalkingTitles}>
        <p>Minado Diario</p>
        <img src="/iconos/flechaHaciaAbajo.png" alt="" />
       <div className={styles.StalkingMoneda}>
        <img src="/iconos/monedag2.png" alt="" />
        <p>$0.36 <b>AIG</b></p>
        </div> 
      </div>
      <div className={styles.StalkingImg}>
        <div className={styles.StalkingResults}>
          <p>1234567890111213 (Wallet)</p>
          <p>1234567890111213 (ID Minera)</p>
        </div>
        <p>06/01/2023</p>
      </div>
    </div>
 </div>
  );
}
