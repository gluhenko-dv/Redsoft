import React, { useEffect, useState } from 'react';
import { ICatalogData } from '../../../../interfaces';
import { getResponse } from '../../../Lib/api';

import './Card.style.scss';

const Card: React.FC<ICatalogData> = ({ id, title, price, oldPrice, image, status }) => {
    const [loading, setLoading] = useState(false);
    const [inCart, setInCart] = useState(localStorage.getItem(`${id}`));

    const clickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            const response = getResponse();
            console.log(response);
            const status = `${inCart === 'true' ? 'false' : 'true'}`;
            localStorage.setItem(`${id}`, status);
            setInCart(status);
            setLoading(false);
        }, 1500);
    };

    return (
        <article className={`card ${!status ? 'card-disabled' : ''}`}>
            <div className="card-img">
                <img src={image} alt={title} />
            </div>
            <div className="card-info">
                <h2 className="card-title">{title}</h2>

                {status ? (
                    <div className="card-buy">
                        <div className={`card-prices ${!oldPrice ? 'card-prices-center' : ''}`}>
                            {oldPrice && <span className="card-oldprice">{oldPrice}</span>}
                            <span className="card-price">{price}</span>
                        </div>
                        <button disabled={loading} className={`btn ${inCart === 'true' ? 'btn-cart' : ''}`} onClick={clickHandler}>
                            {loading ? (
                                <div className="loading">Загрузка</div>
                            ) : inCart === 'true' ? (
                                <>
                                    <img src="/images/icons/check.svg" alt="" />В корзине
                                </>
                            ) : (
                                'Купить'
                            )}
                        </button>
                    </div>
                ) : (
                    <span className="card-sold">Продана на аукционе</span>
                )}
            </div>
        </article>
    );
};

export default Card;
