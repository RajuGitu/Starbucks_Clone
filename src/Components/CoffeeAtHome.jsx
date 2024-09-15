import styles from "./CoffeeAtHome.module.css";

const CoffeeAtHome = () => {

    const data = [
        {
            Name:"Christmas Via",
            img:"/images/CoffeeAtHome1.jpg",
            descrip:"Sweet and velvety, with notes of spiced chocolate and spruce...",
            price:1000.00
        },
        {
            Name:"Diwali Blend",
            img:"/images/CoffeeAtHome2.jpg",
            descrip:"Celebrate this Diwali in the best way we know how – with cof...",
            price:1100.00
        },
        {
            Name:"250G Voyage Blend",
            img:"/images/CoffeeAtHome3.svg",
            descrip:"Medium roast coffee from Brazil, Sumatra, and Zambia with no..",
            price:1700.00
        },
        {
            Name:"250G Diwali Blend",
            img:"/images/CoffeeAtHome4.png",
            descrip:"Starbucks is celebrating Diwali the best way we know how - H...",
            price:1100.00
        }
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Wholebeans</h5>
                    <p>Exclusive range of coffee beans roasted to perfection.</p>
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

export default CoffeeAtHome;