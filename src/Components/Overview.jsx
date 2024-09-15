import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Components/Overview.module.css";
import Bestseller from "../assets/CoffeeAtHome.webp"
import CoffeeAtHome from "../assets/Bestseller.webp"
import Drinks from "../assets/Drinks.webp"
import food from "../assets/food.webp"
import Merchandise from "../assets/Merchandise.webp"
import ReadyToEat from "../assets/ReadyToEat.webp"
const Overview = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <h4>HandCrafted Curations</h4>
                <div className={`${styles.images}`}>
                    <div className={`${styles.image1} d-flex flex-column`}>
                        <img src={Bestseller} alt="BestSeller" />
                        <p>BestSeller</p>
                    </div>
                    <div className={`${styles.image2} d-flex flex-column`}>
                        <img src={CoffeeAtHome} alt="BestSeller" />
                        <p>CoffeeAtHome</p>
                    </div>
                    <div className={`${styles.image3} d-flex flex-column`}>
                        <img src={Drinks} alt="BestSeller" />
                        <p>Drinks</p>
                    </div>
                    <div className={`${styles.image4} d-flex flex-column`}>
                        <img src={food} alt="BestSeller" />
                        <p>Food</p>
                    </div>
                    <div className={`${styles.image5} d-flex flex-column`}>
                        <img src={Merchandise} alt="BestSeller" />
                        <p>Merchandise</p>
                    </div>
                    <div className={`${styles.image6} d-flex flex-column`}>
                        <img src={ReadyToEat} alt="BestSeller" />
                        <p>ReadyToEat</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview;