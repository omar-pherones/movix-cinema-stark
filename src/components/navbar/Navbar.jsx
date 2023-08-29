import { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/movix-logo.svg';

import './style.scss';

const Navbar = () => {
    const [show, setShow] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState('');
    const [showSearch, setShowSearch] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // controlNavbar
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow('hide');
            } else {
                setShow('show');
            }
        } else {
            setShow('top');
        }
        setLastScrollY(window.scrollY);
    };
    const navigationHandler = (type) => {
        if (type === 'movie') {
            navigate('/explore/movie');
        } else {
            navigate('/explore/tv');
        }
        // setMobileMenu(false);
    };
    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };
    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <nav className={`navbar  ${mobileMenu ? 'mobileView' : ''}  ${show}`}>
            <div className="wrapper navbarWrapper">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="movies" />
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler('movie')}
                    >
                        Movies
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler('tv')}
                    >
                        TV Shows
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
