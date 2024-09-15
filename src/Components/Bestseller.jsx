import styles from "./Bestseller.module.css";

const Bestseller = () => {

    const data = [
        {
            Name: "Caffe Americano",
            img: `/images/caffee Americano.webp`,
            descrip: "SHORT(237 mL) .0 kcal",
            info: "Rich in flavour, full-bodied espresso with hot water in true...",
            price: 267.75
        },
        {
            Name: "Cold Coffee",
            img: "/images/cold coffee.webp",
            descrip: "TALL(354 mL) .354 kcal",
            info: "Our signature rich in flavour espresso blended with delicate...",
            price: 320.25
        },
        {
            Name: "Java Chip Frappuccino",
            img: "/images/java chip.webp",
            descrip: "TALL(354 mL) .392 kcal",
            info: "Mocha sauce and Frappuccino® chips blended with with Frappu...",
            price: 362.25
        },
        {
            Name: "Double Chocolate Chip Frappuccino",
            img: "/images/double chocolate.webp",
            descrip: "TALL(354 mL) .415 kcal",
            info: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
            price: 409.50
        },
        {
            Name: "Creamy Spinach and Corn Pocket",
            img: "/images/creamy spinaach.webp",
            descrip: "PER SERVE (160 gm) - 358 Kcal",
            info: "A creamy spinach and corn filling encased in a buttery Fren...",
            price: 252.00
        },
        {
            Name:"Cappuccino",
            img:"/images/cappuccino.jpg",
            descrip:"SHORT(237 mL) .104 Kcal",
            info:"Dark, Rich in flavour espresso lies in wait under a smoothed...",
            price:299.25
        },
        {
            Name:"Double Chocolate Chip Cookie",
            img:"/images/double_chocolate_chip.jpg",
            descrip:"PER SERVE (80 gm) - 385.3 Kcal",
            info:"A soft & chewy chocolate cookie topped with chocolate chips ...",
            price:294.00
        }
    ]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Bestseller</h5>
                    <p>Everyone's favorite Starbucks put together in a specially curated collection.</p>
                </div>
                <div className="d-flex flex-wrap">

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
                                    <p1>{d.descrip}</p1>
                                    <p>{d.info}</p>
                                </div>
                            </div>
                            <div className={`${styles.lowersection} d-flex justify-content-between`}>
                                <h6>₹{d.price.toFixed(2)}</h6>
                                <button>Add Item</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Bestseller;