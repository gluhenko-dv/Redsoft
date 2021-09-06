import React from 'react';
import { Footer, Header } from '..';
import './Layout.style.scss';

const Layout: React.FC = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <div>
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
