import styles from "./Learnmore.module.css";
import learn from "../assets/coffee.jpg"

const Learnmore = () => {
    return (
        <>
            <div style={{ height: "35px" }}></div>
            <div className={`${styles.container}`}>
                <span>
                    <h4>Learn more about the world of coffee!</h4>
                    <a href="">Discover More</a>
                </span>
                <div className={`${styles.image}`}>
                    <img src={learn} alt="" />
                    <div className={`${styles.learning}`}>
                        <button>Coffee culture</button>
                        <div className={`${styles.description}`}>
                            <h3>Art & Science Of Coffee Brewing</h3>
                            <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "35px" }}></div>
        </>
    )
}

export default Learnmore;