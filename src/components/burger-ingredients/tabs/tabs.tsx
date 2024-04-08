import React, { useMemo, useCallback, FC } from "react";
import { useDispatch, useSelector } from "../../../services/hooks";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import { setActiveTab } from "../../../services/actions/tabs";
import { component_tabs } from "../../../utils/data";

interface ITabsProps {
  rowsRefObj: { [key: string]: React.RefObject<HTMLLIElement> };
}

// Компонент вкладок для выбора категории ингредиентов
const Tabs: FC<ITabsProps> = ({ rowsRefObj }) => {
  const dispatch = useDispatch();
  // Получение активной вкладки и ссылок на элементы
  const { tabs: itemsTabs, activeTab } = useSelector((state) => state.tabs);

  // Функция прокрутки к выбранной вкладке
  function scrollToRef(ref: React.RefObject<HTMLElement> | null) {
    ref?.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  // Обработчик изменения вкладки
  const handleTabChange = useCallback(
    (selectedTab) => {
      console.log(rowsRefObj);
      dispatch(setActiveTab(selectedTab));
      // Прокрутка к выбранной вкладке
      scrollToRef(rowsRefObj[selectedTab]);
    },
    [dispatch, rowsRefObj]
  );

  // Создание элементов вкладок
  const tabElements = useMemo(
    () =>
      itemsTabs.map(([keyTab, nameTab]) => (
        <Tab
          key={keyTab}
          value={keyTab}
          active={activeTab === keyTab}
          onClick={() => handleTabChange(keyTab)}
        >
          {nameTab}
        </Tab>
      )),
    [itemsTabs, activeTab, handleTabChange]
  );

  return <div className={styles.container}>{tabElements}</div>;
};

export default Tabs;
