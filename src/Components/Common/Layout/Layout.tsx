import React from 'react';
import { Footer, Header } from '..';
import './Layout.style.scss'


const Layout: React.FC = (props) => {
    const { children } = props;
    return (
        <>
            <head>
                <title>title</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Описание" />
                <meta name="keywords" content="Ключевые слова" />
            </head>

            <Header />

            <div>
                {children}
                <Footer/>
            </div>
        </>
    );
};

export default Layout;
