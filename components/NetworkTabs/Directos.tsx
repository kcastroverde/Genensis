import styles from "./Directos.module.css";
import PageAnimation from "../PageAnimation";
import UsersTable from "../UsersTable";

export default function TabDirectos() {
  return (
    <PageAnimation>
      <div className={"largeCard " + styles.container}>
        <div className={styles.innerContainer}>
          <UsersTable />
        </div>
      </div>
    </PageAnimation>
  );
}
