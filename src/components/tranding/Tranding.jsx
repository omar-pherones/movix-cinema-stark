import { useState } from "react";
import SwitchTabs from "../switchTabs/SwitchTabs";
import Carousel from "../carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const Tranding = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    // onChange Handler

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection ">
            <div className="wrapper carouselWrapper">
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </div>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Tranding;
