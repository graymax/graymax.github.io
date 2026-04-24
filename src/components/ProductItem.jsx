import { useState } from "react";
import styles from "./ProductItem.module.scss";

function ProductItem({ image, name, description, price, detail }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.productItem} ${flipped ? styles.isFlipped : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={styles.productFront}>
        <div className={styles.productImage}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productDescription}>{description}</div>
        <div className={styles.productPrice}>{price}</div>
      </div>
      <div className={styles.productBack}>
        <div className={styles.productDetail}>{detail}</div>
      </div>
    </div>
  );
}

export default ProductItem;
