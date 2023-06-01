import './parameter.scss'
import React from "react";
import ParameterPrice from "./ParameterItem";

const Parameter = ({parameter}) => {

    return (
        <div className="parameter">
            <h3 className="parameter__title">Parameters of project</h3>
            <div className="parameter__content">
                {parameter?.values &&
                <>
                    <ParameterPrice type="value" title="Customer:" value={parameter?.values.customer}/>
                    <ParameterPrice type="value" title="Customer:" value={parameter?.values.customer}/>
                    <ParameterPrice type="value" title="Square:" value={parameter?.values.square}/>
                    <ParameterPrice type="value" title="Height:" value={parameter?.values.height}/>
                    <ParameterPrice type="value" title="Start Date:" value={parameter?.values.startDate}/>
                    <ParameterPrice type="value" title="End Date:" value={parameter?.values.endDate}/>
                    <ParameterPrice type="value" title="Time:" value={parameter?.values.time}/>
                </>}

                {parameter?.prices &&
                <>
                    <ParameterPrice type="price" title="Floor:" value={parameter?.prices.floor}/>
                    <ParameterPrice type="price" title="Walls:" value={parameter?.prices.walls}/>
                    <ParameterPrice type="price" title="Ceiling:" value={parameter?.prices.ceiling}/>
                    <ParameterPrice type="price" title="Furniture:" value={parameter?.prices.furniture}/>
                    <ParameterPrice type="price" title="Plumbing:" value={parameter?.prices.plumbing}/>
                    <ParameterPrice type="price" title="Doors:" value={parameter?.prices.doors}/>
                    <ParameterPrice type="price" title="Decor:" value={parameter?.prices.decor}/>
                    <ParameterPrice type="price" title="Lighting:" value={parameter?.prices.lighting}/>
                    <ParameterPrice type="price" title="Technique:" value={parameter?.prices.technique}/>
                    <ParameterPrice type="total" title="Total:" value={parameter?.prices.price}/>
                </>}

            </div>
        </div>
    )
}

export default Parameter