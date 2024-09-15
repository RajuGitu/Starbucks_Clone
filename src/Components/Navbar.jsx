import { useState } from "react";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState("Bestseller");

    return (
        <>
            <div className={styles.container}>
                <p onClick={() => setNav("Bestseller")}
                    className={classNames({ [styles.active]: nav === "Bestseller" })}>
                    <Link to="/Order/Bestseller" className={styles.link}>Bestseller</Link></p>
                <span>|</span>
                <p onClick={() => setNav("Drinks")}
                    className={classNames({ [styles.active]: nav === "Drinks" })}>
                    <Link to="/Order/Drinks" className={styles.link}>Drinks</Link></p>
                <span>|</span>
                <p onClick={() => setNav("Foods")}
                    className={classNames({ [styles.active]: nav === "Foods" })}>
                    <Link to="/Order/Foods" className={styles.link}>Foods</Link>
                </p>
                <span>|</span>
                <p onClick={() => setNav("Merchandise")}
                    className={classNames({ [styles.active]: nav === "Merchandise" })}>
                    <Link to="/Order/Merchandise" className={styles.link}>Merchandise</Link>
                </p>
                <span>|</span>
                <p onClick={() => setNav("CoffeeAtHome")}
                    className={classNames({ [styles.active]: nav === "CoffeeAtHome" })}>
                    <Link to="/Order/CoffeeAtHome" className={styles.link}>Coffee At Home</Link>
                </p>
                <span>|</span>
                <p onClick={() => setNav("ReadyToEat")}
                    className={classNames({ [styles.active]: nav === "ReadyToEat" })}>
                    <Link to="/Order/ReadyToEat" className={styles.link}>Ready To Eat</Link>
                </p>
            </div>
        </>
    )
}

export default Navbar;