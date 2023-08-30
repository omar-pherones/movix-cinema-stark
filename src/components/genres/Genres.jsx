import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);
    return (
        <div className="genres">
            {data?.map((genres_id) => {
                return (
                    <div key={genres_id} className="genre">
                        {genres[genres_id]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;
