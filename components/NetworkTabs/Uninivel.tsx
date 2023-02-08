import PageAnimation from "../PageAnimation";
import UsersTable from "../UsersTable";

export default function TabUninivel() {
  return (
    <PageAnimation>
      <div className={"largeCard "} style={{ height: "100%" }}>
        <div style={{ height: "100%" }}>
          <UsersTable />
        </div>
      </div>
    </PageAnimation>
  );
}
