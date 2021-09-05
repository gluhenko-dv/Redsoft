import React from 'react';
import { Card } from '../../Blocks';

import './Products.style.scss';

interface ProductsProps {
    title?: string;
    data?: {
        id: number;
        title: string;
        price: string | null;
        oldPrice: string | null;
        image: string;
        status: boolean;
    }[];
}

const Products: React.FC<ProductsProps> = ({ title, data }) => {
    return (
        <section className="products container">
            {title && <h2>{title}</h2>}
            <div className="products-catalog">
                {data?.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Products;
