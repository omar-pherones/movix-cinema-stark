import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../../components/lazyLoadingImage/Img";
import useFetch from "../../hooks/useFetch";
import "./style.scss";
const HeroBanner = () => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [background, SetBackground] = useState("");
    const { data, loading } = useFetch("/movie/popular");

    useEffect(() => {
        SetBackground(
            url.backdrop +
                data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        );
    }, [data]);

    // input search handler
    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`);
        }
    };
    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}
            <div className="bottom-layer"></div>
            <div className="wrapper heroBannerWrappe">
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            type="text"
                            name="search"
                            placeholder="Search for a movie or tv show...."
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
