import { useState } from "react";
import SwitchTabs from "../switchTabs/SwitchTabs";
import Carousel from "../carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    // onChange Handler
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection ">
            <div className="wrapper carouselWrapper">
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </div>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopRated;
