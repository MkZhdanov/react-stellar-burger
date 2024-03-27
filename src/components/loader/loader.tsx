import React, { FC } from "react";
import styles from "./loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
