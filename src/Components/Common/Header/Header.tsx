import { Navbar } from '..';
import './Header.style.scss';

const Header: React.FC = () => {
    return (
        <header className="header container">
            <img src="./images/icons/headerLogo.svg" alt="logo" />
            <Navbar />
            <form className="header-search">
                <input className="header-search__input" type="text" placeholder="Поиск по названию картины" />
                <button className="btn">Найти</button>
            </form>
        </header>
    );
};

export default Header;
