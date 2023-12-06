import React from "react";
import styles from "./modal-header.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function ModalHeader({ title, close }) {
  return (
    <div className={styles.header}>
      {title && (
        <p className={`${styles.title} text text_type_main-large`}>{title}</p>
      )}
      <CloseIcon className={styles.btn} type="primary" onClick={close} />
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
};
