import './header-anons.scss'
import React from 'react';
import {useSelector} from 'react-redux';
import {MessageBox, LoadingBox} from '../box/boxes'

const HeaderAnons = () => {

    const {isLoadingCustomise, errorCustomise, customise} = useSelector(state => state.customiseReducer)
    const headersAvailable = !errorCustomise && !isLoadingCustomise && customise?.headers
    const {headers} = customise || {}

    return (
        <>
            {isLoadingCustomise && <LoadingBox/>}
            {errorCustomise && <MessageBox variant="errorVariant">{errorCustomise}</MessageBox>}
            {headersAvailable &&
            <div className="header-anons">
                <div className="header-anons__left">
                    <h2 className="header-anons__left-title">{headers.warm_atmosphere.title}</h2>
                    <div className="header-anons__left-subtitle">{headers.warm_atmosphere.subtitle}</div>
                </div>
                <p className="header-anons__right">
                    {headers.warm_atmosphere.text}
                </p>
            </div>
            }
        </>
    )
}

export default HeaderAnons;