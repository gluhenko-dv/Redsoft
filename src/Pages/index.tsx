import { useState, useEffect } from 'react';
import { Layout } from '../Components/Common';
import Products from '../Components/Sections/Products/Products';

interface ICatalog {
    title?: string;
    data?: {
        id: number;
        title: string;
        price: string;
        oldPrice: string;
        image: string;
        status: boolean;
    }[];
}

const Index: React.FC = () => {
    const [catalog, setCatalog] = useState<ICatalog>();

    useEffect(() => {
        const response = () => fetch(`./data/catalog.json`);
        response()
            .then((response) => response.json())
            .then((data) => setCatalog(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Layout>
            <Products {...catalog} />
        </Layout>
    );
};

export default Index;
