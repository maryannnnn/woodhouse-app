import './parameter.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {parameterDetailsAction} from "../actions/parameterActions";
import ParameterItem from "./ParameterItem";

const Parameter = (props) => {

    const dispatch = useDispatch();

    const parameterDetail = useSelector((state) => state.parameterDetailsReducer);
    const {parameter} = parameterDetail;

    useEffect(() => {
        dispatch(parameterDetailsAction(props.parameterId));
    }, [dispatch, props.parameterId]);

    return (
        <div className="parameter">
            <h3 className="parameter__title">Parameters of project</h3>
            <div className="parameter__content">
                <ParameterItem type="value" title="Customer:" value={parameter.customer}/>
                <ParameterItem type="value" title="Square:" value={parameter.square}/>
                <ParameterItem type="value" title="Height:" value={parameter.height}/>
                <ParameterItem type="value" title="Start Date:" value={parameter.startDate}/>
                <ParameterItem type="value" title="End Date:" value={parameter.endDate}/>
                <ParameterItem type="value" title="Time:" value={parameter.time}/>
                <ParameterItem type="price" title="Floor:" value={parameter.floor}/>
                <ParameterItem type="price" title="Walls:" value={parameter.walls}/>
                <ParameterItem type="price" title="Ceiling:" value={parameter.ceiling}/>
                <ParameterItem type="price" title="Furniture:" value={parameter.furniture}/>
                <ParameterItem type="price" title="Plumbing:" value={parameter.plumbing}/>
                <ParameterItem type="price" title="Doors:" value={parameter.doors}/>
                <ParameterItem type="price" title="Decor:" value={parameter.decor}/>
                <ParameterItem type="price" title="Lighting:" value={parameter.lighting}/>
                <ParameterItem type="price" title="Technique:" value={parameter.technique}/>
                <ParameterItem type="total" title="Technique:" value={parameter.price}/>
            </div>
        </div>
    )
}

export default Parameter