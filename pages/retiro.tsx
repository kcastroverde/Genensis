import PageAnimation from "@/components/PageAnimation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UsersTable from "@/components/UsersTable";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "table"])),
    },
  };
}

export default function Retiro() {
  return (
    <PageAnimation>
      <div className="largeCard" style={{ height: "100%" }}>
        <UsersTable />
      </div>
    </PageAnimation>
  );
}
