import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import classNames from "classnames"; // You can also install the classnames package using 'npm install classnames'

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <img src={logo} alt="Logo" />
          <ul className={styles.list}>
            <li
              onClick={() => setActive("Home")}
              className={classNames(styles.link, { [styles.active]: active === "Home" })}
            >
              <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li
              onClick={() => setActive("Gift")}
              className={classNames(styles.link, { [styles.active]: active === "Gift" })}
            >
              <Link to="/Gift" className={styles.link}>Gift</Link>
            </li>
            <li
              onClick={() => setActive("Order")}
              className={classNames(styles.link, { [styles.active]: active === "Order" })}
            >
              <Link to="/Order" className={styles.link}>Order</Link>
            </li>
            <li
              onClick={() => setActive("Pay")}
              className={classNames(styles.link, { [styles.active]: active === "Pay" })}
            >
              <Link to="/Pay" className={styles.link}>Pay</Link>
            </li>
            <li
              onClick={() => setActive("Store")}
              className={classNames(styles.link, { [styles.active]: active === "Store" })}
            >
              <Link to="/Store" className={styles.link}>Store</Link>
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <box-icon name="search-alt-2" size="sm"></box-icon>
            <input type="text" placeholder="Looking For Something Specific?" />
          </div>
          <box-icon name="user" type="solid" size="sm"></box-icon>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.name}>
        <h5>Starbucks</h5>
        <button type="button" className="btn btn-dark">
          Know More
        </button>
      </div>
      <div className={styles.border}></div>
    </>
  );
};

export default Header;
