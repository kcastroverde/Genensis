import TabBinaria from "@/components/NetworkTabs/Binaria";
import TabDirectos from "@/components/NetworkTabs/Directos";
import TabUninivel from "@/components/NetworkTabs/Uninivel";
import PageAnimation from "@/components/PageAnimation";
import TabSelector from "@/components/TabSelector";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement, useState } from "react";
import { useTranslation } from "next-i18next";
import { AnimatePresence } from "framer-motion";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "myNetwork",
        "table",
      ])),
    },
  };
}

const TABS = ["directos", "binaria", "uninivel"] as const;

const TABS_CONTENT: Record<typeof TABS[number], () => ReactElement> = {
  directos: TabDirectos,
  binaria: TabBinaria,
  uninivel: TabUninivel,
};

export default function MiRed() {
  const { t } = useTranslation("myNetwork");
  const [selectedTab, setSelectedTab] =
    useState<typeof TABS[number]>("directos");
  const Component = TABS_CONTENT[selectedTab];

  return (
    <PageAnimation>
      <TabBinaria/>
      {/*<div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <TabSelector
          selectedTabId={selectedTab}
          onTabSelected={setSelectedTab}
          tabs={TABS.map((tabId) => ({ id: tabId, label: t("tabs." + tabId) }))}
        />
        <AnimatePresence>
          <Component />
        </AnimatePresence>
      </div>*/}
    </PageAnimation>
  );
}
