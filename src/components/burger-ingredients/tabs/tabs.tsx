import React, { useMemo, useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import { setActiveTab } from "../../../services/actions/tabs";
import { component_tabs } from "../../../utils/data";

// Компонент вкладок для выбора категории ингредиентов
const Tabs: FC = () => {
  const dispatch = useDispatch();
  // Получение активной вкладки и ссылок на элементы
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const scrollRefs = useSelector((state) => state.tabs.scrollRefs);

  // Массив ключей для вкладок
  const tabKeys = Object.keys(component_tabs);

  // Функция прокрутки к выбранной вкладке
  const scrollToTab = useCallback((scrollRef) => {
    scrollRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  // Обработчик изменения вкладки
  const handleTabChange = useCallback(
    (selectedTab) => {
      dispatch(setActiveTab(selectedTab));
      scrollToTab(scrollRefs[selectedTab]);
    },
    [dispatch, scrollToTab, scrollRefs]
  );

  // Создание элементов вкладок
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
};

export default Tabs;
