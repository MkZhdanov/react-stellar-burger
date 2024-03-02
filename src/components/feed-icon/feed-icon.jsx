import styles from "./feed-icon.module.css";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function FeedIcon({ id, zIndex, col }) {
  const ingredients = useSelector((state) => state.ingredientsData.ingredients);

  const { image_mobile: image, name } = useMemo(
    () => ingredients.find((ingredient) => ingredient._id === id),
    [ingredients, id]
  );

  return (
    <div className={styles.container} style={{ zIndex }}>
      <img
        className={`${styles.image} ${col && styles.image_black}`}
        src={image}
        alt={name}
      />
      {col && (
        <p className={`${styles.text} text text_type_main-default`}>{col}</p>
      )}
    </div>
  );
}

FeedIcon.propTypes = {
  id: PropTypes.string.isRequired,
  zIndex: PropTypes.number,
  col: PropTypes.number,
};
