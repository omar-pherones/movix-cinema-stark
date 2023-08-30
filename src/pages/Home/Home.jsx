import HeroBanner from "../../components/heroBanner/HeroBanner";
import Tranding from "../../components/tranding/Tranding";

import "./style.scss";

const Home = () => {
    return (
        <div className="homeWrapper">
            <HeroBanner />
            <Tranding />
        </div>
    );
};

export default Home;
