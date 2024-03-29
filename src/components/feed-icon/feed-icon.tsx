import styles from "./feed-icon.module.css";
import React, { useMemo, FC } from "react";
import { useSelector } from "../../services/hooks";

interface IFeedIconProps {
  id: string;
  zIndex?: number;
  col?: number;
  hover?: boolean;
}

const FeedIcon: FC<IFeedIconProps> = ({ id, zIndex, col }) => {
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
};

export default FeedIcon;
