import HeroBanner from "../../components/heroBanner/HeroBanner";
import Popular from "../../components/popular/Popular";
import TopRated from "../../components/topRated/TopRated";
import Tranding from "../../components/tranding/Tranding";

import "./style.scss";

const Home = () => {
    return (
        <div className="homeWrapper">
            <HeroBanner />
            <Tranding />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
