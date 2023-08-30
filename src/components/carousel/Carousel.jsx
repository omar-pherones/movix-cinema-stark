import { useRef, useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png";
import Img from "../lazyLoadingImage/Img";
import Rating from "../rating/Rating";
import Genres from "../genres/Genres";

import "./style.scss";

const Carousel = ({ data, loading }) => {
    const carouselContainerRef = useRef(null);
    const { url } = useSelector((state) => state.home);
    const navigation = (dir) => {
        const container = carouselContainerRef.current;
        const scrollAmount =
            dir === "Left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };
    return (
        <div className="carousel">
            <div className="wrapper carouselWrapper">
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainerRef}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div key={item.id} className="carouselItem">
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <Rating
                                            rating={item.vote_average.toFixed(
                                                1
                                            )}
                                        />
                                        <Genres
                                            data={item.genre_ids.slice(0, 2)}
                                        />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="data">
                                            {dayjs(item.release_Date).format(
                                                "MMM D, YYYY"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;
