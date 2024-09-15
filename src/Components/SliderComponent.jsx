import styles from "./SliderComponent.module.css";

import Cappuccino from "../assets/cappuccino.webp";
import Signature from "../assets/signature.webp";
import Vanilla from "../assets/vanilla.webp";
import ColdBrew from "../assets/coldbrew.webp";
import TallJava from "../assets/talljava.webp";

import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const SliderComponent = () => { // Renaming the component to avoid conflicts
    const data = [
        {
            Name: "Cappuccino",
            img: Cappuccino,
            description: "Shorts()",
            Price: 283.50,
        },
        {
            Name: "Signature Hot Chocolate",
            img: Signature,
            description: "Shorts(237ML).284 kcal",
            Price: 309.75,
        },
        {
            Name: "Vanilla Milkshake",
            img: Vanilla,
            description: "Tall(354ML).PRE SERVE(354ml)-531 kcal",
            Price: 378.00,
        },
        {
            Name: "Cold Brew Black",
            img: ColdBrew,
            description: "Shorts(Short Cold Brew Black)",
            Price: 299.25,
        },
        {
            Name: "Tall Java Chip Frappuccino",
            img: TallJava,
            description: "Tall()",
            Price: 388.50,
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3, // Default on desktop
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // 2 slides on tablets
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // 1 slide on mobile
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className={styles.container}>
                <span>
                    <h4>Barista Recommends</h4>
                    <Link to="/Order" className={styles.link}>View Menu</Link>
                </span>
                <div className={styles.Subcontainer}>
                    <SlickSlider {...settings} styles={{marginRight:"10px"}}>
                        {data.map((d, index) => (
                            <div className={styles.card} key={index}>
                                <div className={`${styles.uppersection} d-flex`}>
                                    <img src={d.img} alt={d.Name} />
                                    <div className={`${styles.descrip} d-flex flex-column`}>
                                        <img
                                            src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                                            alt="veg-icon"
                                            className={styles.vegIcon}
                                        />
                                        <h5>{d.Name}</h5>
                                        <p>{d.description}</p>
                                    </div>
                                </div>
                                <div className={`${styles.lowersection} d-flex justify-content-between`}>
                                    <h6>₹{d.Price.toFixed(2)}</h6>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
            </div>
        </>
    );
};

export default SliderComponent;
