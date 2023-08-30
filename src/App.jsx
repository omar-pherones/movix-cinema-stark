import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { getApiConfiguration, getGenres } from "./features/homeSlice";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import { fetchDataFromApi } from "./utils/api";
import { all } from "axios";
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);
    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };
            dispatch(getApiConfiguration(url));
        });
    };
    // multipule Promise genres data fetching tv and movie
    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};
        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });
        const data = await Promise.all(promises);
        // console.log(data);
        data?.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });
        dispatch(getGenres(allGenres));
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
