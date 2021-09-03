import { useState, useEffect } from 'react';
import { Layout } from '../Components/Common';

interface ICatalog {
    title: string;
    data: {
        title: string;
        price: string | null;
        oldPrice: string | null;
        image: string | null;
        status: true;
    }[];
}

const Index: React.FC = () => {
    const [catalog, setCatalog] = useState<ICatalog>();

    useEffect(() => {
        const response = () => fetch(`http://localhost:3000/data/catalog.json`);
        response()
            .then((response) => response.json())
            .then((data) => setCatalog(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Layout>
            <h2>index</h2>
        </Layout>
    );
};

export default Index;
