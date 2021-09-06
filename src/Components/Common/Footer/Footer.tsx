import { Navbar } from '..';
import './Footer.style.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer container">
            <img src="./images/icons/footerLogo.svg" alt="logo" />
            <Navbar />
            <div className="footer-contacts">
                <div className="footer-contacts__wrap">
                    <img src="/images/icons/phone.svg" alt="phone icon" />
                    <a href="tel:+7 (495) 555-55-55">+7 (495) 555-55-55</a>
                </div>
                <div className="footer-contacts__wrap">
                    <img src="/images/icons/adress.svg" alt="adres icon" />
                    <span>г. Москва, ул. Расплетина, 24</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
