import React from 'react';
import { ICatalog } from '../../../../interfaces';
import { Card } from '../../Blocks';

import './Products.style.scss';

const Products: React.FC<ICatalog> = ({ title, data }) => {
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
