import { useEffect, useState } from "react";
import styles from "./TabSelector.module.css";

interface TabDescription<TabId> {
  id: TabId;
  label: string;
}

export interface TabSelectorProps<TabId> {
  tabs: TabDescription<TabId>[];
  selectedTabId?: TabId;
  onTabSelected?: (tabId: TabId) => void;
}

export default function TabSelector<TabId>({
  tabs,
  selectedTabId,
  onTabSelected,
}: TabSelectorProps<TabId>) {
  const [localSelectedTab, setLocalSelectedTab] = useState<TabId | undefined>(
    tabs[0]?.id
  );

  useEffect(() => {
    if (tabs.length == 0 && localSelectedTab != "")
      setLocalSelectedTab(undefined);
    else if (!tabs.some((tab) => tab.id == localSelectedTab))
      setLocalSelectedTab(tabs[0].id);
  }, [tabs, localSelectedTab]);

  const selectedTab = selectedTabId || localSelectedTab;

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <button
          key={"" + tab.id}
          className={selectedTab == tab.id ? styles.selected : ""}
          onClick={() => {
            setLocalSelectedTab(tab.id);
            if (onTabSelected) onTabSelected(tab.id);
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
