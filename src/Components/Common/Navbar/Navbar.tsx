import React from 'react';

import './Navbar.style.scss';

const Navbar: React.FC = (props) => {
    const { children } = props;
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a className="nav-link" href="#">
                        Каталог
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        Доставка
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        Оплата
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        Контакты
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        О галерее
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
