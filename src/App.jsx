import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home/Home';
import Details from './pages/details/Details';
import Search from './pages/Search/Search';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import { getApiConfiguration } from './features/homeSlice';
import { fetchDataFromApi } from './utils/api';
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchApiConfig();
    }, []);
    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((res) => {
            // console.log(res);
            const url = {
                backdrop: res.images.secure_base_url + 'original',
                poster: res.images.secure_base_url + 'original',
                profile: res.images.secure_base_url + 'original',
            };
            dispatch(getApiConfiguration(url));
        });
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
