import Header from "./Header";
import Learnmore from "./Learnmore";
import Overview from "./OverView";
import SliderComponent from "./SliderComponent";
import Terms from "./Terms";

const Home = () => {
    return (
        <>
            <Overview></Overview>
            <SliderComponent></SliderComponent>
            <Learnmore></Learnmore>
            <Terms></Terms>
        </>
    )
}

export default Home;