import React, { useMemo, useCallback, FC } from "react";
import { useSelector, useDispatch } from "../../../services/hooks";
import styles from "./ingredients.module.css";
import IngredientGrid from "./ingredient-grid/ingredient-grid";
import { component_tabs } from "../../../utils/data";
import { setActiveTab } from "../../../services/actions/tabs";

interface IIngredientsProps {
  rowsRefObj: { [key: string]: React.RefObject<HTMLLIElement> };
}

// Компонент отображения ингредиентов
const Ingredients: FC<IIngredientsProps> = ({ rowsRefObj }) => {
  // Получение состояний из Redux
  const { tabs: tabsData, activeTab } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  const TAB_OFFSET = 10;
  const ROW_HEIGHT_THRESHOLD = 15;

  // Функция для расчета расстояния от верха контейнера до ближайшей вкладки
  const calculateDistanceFromTop = useCallback(
    (targetElement) => {
      const containerRect = targetElement.getBoundingClientRect();
      const tabRefs = tabsData.map(
        ([tabKey, tabName]) => rowsRefObj[tabKey].current
      );

      const lastTabRef = tabRefs[tabRefs.length - 1];
      const lastTabRect = lastTabRef?.getBoundingClientRect();

      if (
        lastTabRef !== null &&
        lastTabRect &&
        lastTabRect.y + lastTabRect.height <=
          containerRect.y + containerRect.height + TAB_OFFSET
      ) {
        return lastTabRef.id;
      }
      const newTabRef = tabRefs.find((tabRef) => {
        const tabRect = tabRef?.getBoundingClientRect();
        return tabRect
          ? tabRect.bottom >= containerRect.top - ROW_HEIGHT_THRESHOLD &&
              tabRect.top <= containerRect.bottom + ROW_HEIGHT_THRESHOLD
          : false;
      });
      return newTabRef ? newTabRef.id : null;
    },
    [rowsRefObj, tabsData]
  );

  // Обработчик события скролла
  const scrollHandler = useCallback(
    (event) => {
      const newActiveTab = calculateDistanceFromTop(event.currentTarget);
      if (newActiveTab && newActiveTab !== activeTab) {
        dispatch(setActiveTab(newActiveTab));
      }
    },
    [calculateDistanceFromTop, dispatch, activeTab]
  );

  // Создание компонентов строк с ингредиентами
  const ingredientsGrids = useMemo(
    () =>
      tabsData.map(([tabKey, tabName]: string[]) => (
        <IngredientGrid
          key={tabKey}
          data={{ tabKey, tabName }}
          rowRef={rowsRefObj[tabKey]}
        />
      )),
    [tabsData]
  );

  return (
    <ul
      className={`${styles.container} custom-scroll`}
      onScroll={scrollHandler}
    >
      {ingredientsGrids}
    </ul>
  );
};

export default Ingredients;
