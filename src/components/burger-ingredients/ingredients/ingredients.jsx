import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ingredients.module.css";
import IngredientGrid from "./ingredient-grid/ingredient-grid";
import { component_tabs } from "../../../utils/data";
import { setActiveTab } from "../../../services/actions/tabs";
import { ingredientPropType } from "../../../utils/prop-types";
import PropTypes from "prop-types";

export default function Ingredients() {
  const { activeTab, scrollRefs } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  const tabKeys = Object.keys(component_tabs);
  const TAB_OFFSET = 10;
  const ROW_HEIGHT_THRESHOLD = 15;

  const calculateDistanceFromTop = useCallback(
    (targetElement) => {
      const containerRect = targetElement.getBoundingClientRect();
      const tabRefs = tabKeys.map((tab) => scrollRefs[tab].current);

      const lastTabRef = tabRefs[tabRefs.length - 1];
      const lastTabRect = lastTabRef?.getBoundingClientRect();

      if (
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
    [tabKeys, scrollRefs]
  );

  const scrollHandler = useCallback(
    (event) => {
      const newRow = calculateDistanceFromTop(event.currentTarget);
      newRow && newRow !== activeTab && dispatch(setActiveTab(newRow));
    },
    [calculateDistanceFromTop, dispatch, activeTab]
  );

  const ingredientsGrids = useMemo(
    () => tabKeys.map((tab) => <IngredientGrid key={tab} tab={tab} />),
    [tabKeys]
  );

  return (
    <ul
      className={`${styles.container} custom-scroll`}
      onScroll={scrollHandler}
    >
      {ingredientsGrids}
    </ul>
  );
}
