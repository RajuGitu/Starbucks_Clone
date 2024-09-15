import styles from "./Drinks.module.css";

const Drinks = () => {

    const data = [
        {
            Name: "Caffe Americano",
            img: "/images/espresso1.jpg",
            descrip: "SHORTS() .",
            info: "Rich, full-bodied espresso with hot water in true European ...",
            price: 287.25
        },
        {
            Name: "Caffe Mocah",
            img: "/images/espresso2.svg",
            descrip: "SHORT() .",
            info: "We combine our Rich in flavour, full-bodied espresso with b...",
            price: 341.25
        },
        {
            Name: "Cappuccino",
            img: "/images/espresso3.jpg",
            descrip: "SHORT(237 mL) .104 Kcal",
            info: "Dark, Rich in flavour espresso lies in wait under a smoothed...",
            price: 299.25
        },
        {
            Name:"Caffe Latte",
            img:"/images/espresso4.jpg",
            descrip:"SHORT(Short Latte) .104 kcal",
            info:"Our dark, Rich in flavour espresso balanced with steamed mil...",
            price:304.50
        },
        {
            Name:"Caramel Macchiato",
            img:"/images/espresso5.jpg",
            descrip:"SHORT(237 mL) .162 kcal",
            info:"Freshly steamed milk with vanilla-flavored syrup is marked w...",
            price:362.25
        },
        {
            Name:"Caffè Mocha",
            img:"/images/espresso6.jpg",
            descrip:"SHORT(237 mL) .232 kcal",
            info:"We combine our rich in flavour, full-bodied espresso with bi...",
            price:341.25
        },
        {
            Name:"Chocolate Cappuccino",
            img:"/images/espresso7.jpg",
            descrip:"SHORT(237 ML) .150 kcal",
            info:"Dark, Rich in flavour espresso and bittersweet cocoa lies in...",
            price:372.75
        },
        {
            Name:"Caffe Americano",
            img:"/images/espresso8.jpg",
            descrip:"SHORT(237 mL) .0 kcal",
            info:"Rich in flavour, full-bodied espresso with hot water in true...",
            price:278.25
        },
        {
            Name:"Chocolate Cortado",
            img:"/images/espresso9.jpg",
            descrip:"PER SERVE (120 ML) - 88 Kcal",
            info:"A perfect espresso shot and mocha sauce, topped with steamed...",
            price:351.75
        },
        {
            Name:"Cortado",
            img:"/images/espresso10.jpg",
            descrip:"PER SERVE (120 ML) - 72 Kcal",
            info:"A perfect espresso shot topped with steamed milk.",
            price:294.00
        },
        {
            Name:"Doppio Espresso",
            img:"/images/espresso11.jpg",
            descrip:"PER SERVE (45 ML) - 0 Kcal",
            info:"Our smooth signature Espresso Roast and its caramelly sweetn...",
            price:278.25
        },
        {
            Name:"Flat White",
            img:"/images/espresso12.jpg",
            descrip:"SHORT(237 mL) .104 kcal",
            info:"Expertly steamed milk poured over shots of ristretto and fin...",
            price:330.75
        },
        {
            Name:"Hazelnut Cortado",
            img:"/images/espresso13.jpg",
            descrip:"PER SERVE (120 ML) - 76 Kcal",
            info:"A perfect espresso shot and hazelnut syrup, topped with stea...",
            price:351.75
        },
        {
            Name:"Iced Caffè Americano",
            img:"/images/espresso14.jpg",
            descrip:"TALL(354 mL) .0 kcal",
            info:"Espresso shots are topped with water to produce a light laye...",
            price:315.00
        },
        {
            Name:"Iced Caffè Mocha",
            img:"/images/espresso15.jpg",
            descrip:"TALL(354 mL) .291 kcal",
            info:"Espresso combined with bittersweet mocha sauce and milk and ...",
            price:341.25
        }
    ]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Espresso</h5>
                    <p>Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.</p>
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

export default Drinks;