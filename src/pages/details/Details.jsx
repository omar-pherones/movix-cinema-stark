import { useParams } from "react-router-dom";
import DetailsBanner from "../../components/detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import Cast from "../../components/cast/Cast";
import Videos from "../../components/videos/Videos";
import SimilarVideos from "../../components/similarVideos/SimilarVideos";
import RecommendationVideos from "../../components/recommendationVideos/RecommendationVideos";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    console.log(credits);
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} creditsLoading={creditsLoading} />
            <Videos data={data} loading={loading} />
            <SimilarVideos mediaType={mediaType} id={id} />
            <RecommendationVideos mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;
