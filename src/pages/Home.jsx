import styles from "./Home.module.scss";
import ProductItem from "../components/ProductItem";
import menuData from "../data/menu.json";

function Home() {
  return (
    <>
      <div className={styles.title}>Menu</div>
      <div className={styles.productList}>
        {menuData.map((item) => (
          <ProductItem
            key={item.id}
            image={require(`../assets/images/${item.image}`)}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
