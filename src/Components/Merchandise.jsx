import styles from "./Merchandise.module.css";

const Merchandise = () => {

    const data = [
        {
            Name:"TRAVEL KIT DISNEY AND FRIENDS",
            img:"/images/Accessories1.png",
            descrip:"Adorable design with mickey mouse and friends pattern, all y...",
            price:3200.00
        },
        {
            Name:"TOTEBAG LUNCH DISNEY N FRNDS",
            img:"/images/Accessories2.png",
            descrip:"Carry lunch in style with the Disney Starbucks lunch tote ba...",
            price:3200.00
        },
        {
            Name:"CANISTER DRAGON",
            img:"/images/Accessories3.png",
            descrip:"Ceramic canister with a cute 3D bearista figure",
            price:2450.00
        },
        {
            Name:"Starbucks Diwali Bearista Keychain",
            img:"/images/Accessories4.png",
            descrip:"Our iconic bear in a traditional attire celebrating by light...",
            price:390.00
        },
        {
            Name:"Starbucks Diwali Bearista Bear",
            img:"/images/Accessories5.png",
            descrip:"Adorned in a traditional festive attire our Bearista is read...",
            price:900.00
        },
        {
            Name:"Starbucks Diwali Hamper",
            img:"/images/Accessories6.png",
            descrip:"Inspired by the iconic siren, the elements in gold make for ...",
            price:390.00
        },
        {
            Name:"Starbucks Iced Latte Candle",
            img:"/images/Accessories7.png",
            descrip:"An exclusive iced latte candle with notes of coffee and vani...",
            price:750.00
        }
    ]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h5>Accessories</h5>
                    <p>Collection of functional and artistic accessories with custom Starbucks design.</p>
                </div>
                <div className="d-flex flex-wrap">

                    {data.map((d, index) => (
                        <div className={styles.card} key={index}>
                            <div className={`${styles.uppersection} d-flex`}>
                                <img src={d.img} alt={d.Name} />
                                <div className={`${styles.descrip} d-flex flex-column`}>
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

export default Merchandise;