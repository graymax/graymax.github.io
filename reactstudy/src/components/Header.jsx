import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.areaHeader}>
      <h1 className={styles.logoSite}>
        <Link to="/">DDeulahn</Link>
      </h1>
      <div className={styles.navigationGlobal}>
        <div className={styles.navigationItem}>
          <Link to="/About">About</Link>
        </div>
        <div className={styles.navigationItem}>
          <Link to="/Photo">Photo</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
