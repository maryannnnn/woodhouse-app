import React from 'react';

const ParameterItem = ({title, value, type}) => {
    return (
        <dl className="parameter__items">
            <dt className="parameter__item">{title}</dt>
            {type === "value" && <dd className="parameter__value">{value}</dd>}
            {type === "price" && <dd className="parameter__price">{value}$</dd>}
            {type === "total" && <dd className="parameter__total">{value}$</dd>}
        </dl>
    );
};

export default ParameterItem