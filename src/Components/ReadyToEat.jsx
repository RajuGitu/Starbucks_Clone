import styles from "./ReadyToEat.module.css";

const ReadyToEat = () => {

    const data = [
        {
            Name: "Festive Indulgence Dry Fruit and Nut Fudge - ...",
            img: "/images/ReadyToEat2.png",
            descrip: "Packsize : 120g Kcal per Pack : 996Kcal Serving size: 15g Calories per serving: Pistachio : 65Kcal Rose Almond : 65Kcal Cashew : 63Kcal Anjeer Halwa : 56Kcal",
            info: "Celebrate the festival of lights with this indulgent box of ...",
            price: 1500.00
        },
        {
            Name: "Festive Indulgence Dry Fruit and Nut Fudge - ...",
            img: "/images/ReadyToEat3.png",
            descrip: "Packsize : 120g Kcal per Pack : 498Kcal Serving size: 15g Calories per serving: Pistachio : 65Kcal Rose Almond : 65Kcal Cashew : 63Kcal Anjeer Halwa : 56Kcal",
            info: "Celebrate the festival of lights with this indulgent box of ...",
            price: 950.00
        }
    ]
    const nonvegData = [
        {
            Name: "Almond Biscotti",
            img: "/images/ReadyToEat1.jpg",
            descrip: "PER SERVE (50 g) - 409 kCal",
            info: "Delicious on its own or a perfect pairing with your favorite...",
            price: 160.00
        }
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Quick Bites</h5>
                    <p>Starbucks snacks available on the go.</p>
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

export default ReadyToEat;