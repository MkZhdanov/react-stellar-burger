import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./ingredient-details.module.css";
import EnergyItem from "./energy-item/energy-item";

export default function IngredientDetails() {
  const { name, image, energy } = useSelector(
    (state) => state.selectedIngredient.ingredient
  );

  const energyItems = useMemo(() => {
    return energy.map(({ name, value }, index) => (
      <EnergyItem key={index} title={name} value={value} />
    ));
  }, [energy]);
  return (
    <div className={styles.info}>
      <img className={`${styles.img} pl-5 pr-5 mb-4`} src={image} alt={name} />
      <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
      <ul className={`${styles.list} mt-8`}>{energyItems}</ul>
    </div>
  );
}
