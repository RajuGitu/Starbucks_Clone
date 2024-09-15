import styles from "./Foods.module.css";

const Foods = () => {

    const data = [
        {
            Name: "Tandoori Soya Chaap Wrap",
            img: "/images/Foods1.jpg",
            descrip: "484Kcal",
            info: "Soft succulent soya chaap in tandoori marinade, cooked to a ...",
            price: 357.00
        },
        {
            Name: "Bake In Mushroom Cheese Melt Baguette SW",
            img: "/images/Foods2.jpg",
            descrip: "PER SERVE (210 gm) - 541Kcal",
            info: "Hearty mushrooms topped with melted yellow cheddar cheese in...",
            price: 472.50
        },
        {
            Name: "Bake In Pesto Veggie Sourdough SW",
            img: "/images/Foods3.jpg",
            descrip: "PER SERVE (150 gm) - 400Kcal",
            info: "Sauteed broccoli florets and mushroom slices with chopped ar...",
            price: 430.50
        },
        {
            Name: " Basil Tomato Mozzarella Cheese Sandwich",
            img: "/images/Foods4.jpg",
            descrip: "PER SERVE (170 gm) - 484Kcal",
            info: "Tomato and mozzarella slices on a layer of basil sauce sandw...",
            price: 382.25
        }
    ]
    const nonvegData = [
        {
            Name: "BBQ Chicken Wrap",
            img: "/images/Foods5.jpg",
            descrip: "380Kcal",
            info: "Smoky Chicken with chopped aromatic vegetables tossed in our...",
            price: 367.50
        },
        {
            Name: "Bake In Roast Chicken Baguette SW",
            img: "/images/Foods6.jpg",
            descrip: "PER SERVE (210 gm) - 706Kcal",
            info: "Roasted chicken meets assorted bell peppers and onions in br...",
            price: 472.50
        },
        {
            Name: "Bake In Sriracha Chicken Sourdough SW",
            img: "/images/Foods7.jpg",
            descrip: "PER SERVE (185 gm) - 521Kcal",
            info: "Spicy and tangy Sriacha grilled chicken shreds with the add...",
            price: 441.00
        }
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Sandwiches & Wraps</h5>
                    <p>Signature breads made with fresh ingredients and in-house sauces.</p>
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
                    {nonvegData.map((d, index) => (
                        <div className={styles.card} key={index}>
                            <div className={`${styles.uppersection} d-flex`}>
                                <img src={d.img} alt={d.Name} />
                                <div className={`${styles.descrip} d-flex flex-column`}>
                                    <img
                                        src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000"
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

export default Foods;