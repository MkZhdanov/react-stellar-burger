import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import { setActiveTab } from "../../../services/actions/tabs";
import { component_tabs } from "../../../utils/data";

export default function Tabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const scrollRefs = useSelector((state) => state.tabs.scrollRefs);

  const tabKeys = Object.keys(component_tabs);

  const scrollToTab = useCallback((scrollRef) => {
    scrollRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  const handleTabChange = useCallback(
    (selectedTab) => {
      dispatch(setActiveTab(selectedTab));
      scrollToTab(scrollRefs[selectedTab]);
    },
    [dispatch, scrollToTab, scrollRefs]
  );

  const tabElements = useMemo(
    () =>
      tabKeys.map((tab) => (
        <Tab
          key={tab}
          value={tab}
          active={activeTab === tab}
          onClick={() => handleTabChange(tab)}
        >
          {component_tabs[tab]}
        </Tab>
      )),
    [tabKeys, activeTab, handleTabChange]
  );

  return <div className={styles.container}>{tabElements}</div>;
}
