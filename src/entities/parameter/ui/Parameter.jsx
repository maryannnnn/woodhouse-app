import './parameter.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {parameterDetailsAction} from "../actions/parameterActions";

const Parameter = (props) => {

    const dispatch = useDispatch();

    const parameterDetail = useSelector((state) => state.parameterDetailsReducer);
    const {isLoadingParameter, errorParameter, parameter} = parameterDetail;

    useEffect(() => {
        dispatch(parameterDetailsAction(props.parameterId));
    }, [dispatch, props.parameterId]);

    return (
        <div className="parameter">
            <h3 className="parameter__title">Parameters of project</h3>
            <div className="parameter__content">
                {/*{isLoadingParameter && <LoadingBox></LoadingBox>}*/}
                {/*{errorParameter && <MessageBox variant="errorVariant">{errorParameter}</MessageBox>}*/}

                {console.log("parameterProject", parameter)}

                <dl className="parameter__items">
                    <dt className="parameter__item">Customer:</dt>
                    <dd className="parameter__value">{parameter.customer}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Square:</dt>
                    <dd className="parameter__value">{parameter.square}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Height:</dt>
                    <dd className="parameter__value">{parameter.height}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Start Date:</dt>
                    <dd className="parameter__value">{parameter.startDate}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">End Date:</dt>
                    <dd className="parameter__value">{parameter.endDate}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Time:</dt>
                    <dd className="parameter__value">{parameter.time}</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Floor:</dt>
                    <dd className="parameter__price">{parameter.floor}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Walls:</dt>
                    <dd className="parameter__price">{parameter.walls}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Ceiling:</dt>
                    <dd className="parameter__price">{parameter.ceiling}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Furniture:</dt>
                    <dd className="parameter__price">{parameter.furniture}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Plumbing:</dt>
                    <dd className="parameter__price">{parameter.plumbing}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Doors:</dt>
                    <dd className="parameter__price">{parameter.doors}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Decor:</dt>
                    <dd className="parameter__price">{parameter.decor}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Lighting:</dt>
                    <dd className="parameter__price">{parameter.lighting}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Technique:</dt>
                    <dd className="parameter__price">{parameter.technique}$</dd>
                </dl>
                <dl className="parameter__items">
                    <dt className="parameter__item">Budget:</dt>
                    <dd className="parameter__total">{parameter.price}$</dd>
                </dl>

            </div>
        </div>
    )
}

export default Parameter