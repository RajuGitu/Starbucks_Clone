import styles from "./Terms.module.css";
import App from "../assets/Appstore.png";
import Googleplay from "../assets/Googleplay.png";
import logo from "../assets/logo.png"

const Terms = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <div className={`${styles.image}`}>
                    <img src={logo} alt="" />
                </div>
                <div className={`${styles.About}`}>
                    <h4>About US</h4>
                    <p>Our Heritage</p>
                    <p>Coffeehouse</p>
                    <p>Our Company</p>
                </div>
                <div className={`${styles.Responsibility}`}>
                    <h4>Responsibility</h4>
                    <p>Diversity</p>
                    <p>Community</p>
                    <p>Ethical Sourcing</p>
                    <p>Environmental Stewardship</p>
                    <p>Learn More</p>
                </div>
                <div className={`${styles.Quicks}`}>
                    <h4>Quicks Links</h4>
                    <p>Privacy Policy</p>
                    <p>FAQS</p>
                    <p>Starbucks India Mobile App Terms Of Use</p>
                    <p>Delivery</p>
                    <p>Season's Gifting</p>
                    <p>Loyalty Program Terms and Conditions</p>
                    <p>Starbucks Rewards Day Offer</p>
                    <p>Beverage Subscription</p>
                </div>
                <div className={`${styles.social}`}>
                    <h4>Social Media</h4>
                    <box-icon type='logo' name='instagram'></box-icon>
                    <box-icon name='facebook-square' type='logo' ></box-icon>
                    <box-icon type='logo' name='twitter'></box-icon>
                </div>
                <div className={`${styles.store}`}>
                    <img src={App} alt="" />
                    <img src={Googleplay} alt="" />
                </div>
            </div>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.info}`}>
                <div className={`${styles.information}`}>
                    <p>Web Accessibility</p>
                    <p>|</p>
                    <p>Privacy Statement</p>
                    <p>|</p>
                    <p>Terms of Use</p>
                    <p>|</p>
                    <p>Contact Us</p>
                </div>
                <p>© 2024 Starbucks Coffee Company.All rights reserved</p>
            </div>
        </>
    )
}

export default Terms;