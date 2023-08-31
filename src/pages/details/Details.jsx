import { useParams } from "react-router-dom";
import DetailsBanner from "../../components/detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import Cast from "../../components/cast/Cast";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} creditsLoading={creditsLoading} />
        </div>
    );
};

export default Details;
