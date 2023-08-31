import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";

const RecommendationVideos = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default RecommendationVideos;
