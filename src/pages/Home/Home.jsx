import HeroBanner from '../../components/heroBanner/HeroBanner';
import './style.scss';

const Home = () => {
    return (
        <div className="homeWrapper" style={{ height: 10000 }}>
            <HeroBanner />
        </div>
    );
};

export default Home;
