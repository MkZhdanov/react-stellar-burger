import React from "react";
import styles from "./burger-components.module.css";
import BurgerComponent from "./burger-component/burger-component";
import { test_burger } from "../../../utils/data";
import { bun } from "../../../utils/data";

export default function BurgerComponents() {
  return (
    <div className={`${styles.container} `}>
      <BurgerComponent
        position="top"
        iconVis={false}
        isLocked={true}
        data={bun}
      />
      <ul className={`${styles.list} custom-scroll`}>
        {test_burger.map((item) => (
          <BurgerComponent iconVis={true} data={item} key={item._id} />
        ))}
      </ul>
      <BurgerComponent
        position="bottom"
        iconVis={false}
        isLocked={true}
        data={bun}
      />
    </div>
  );
}
