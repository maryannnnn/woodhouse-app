import './header.scss'
import './media.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useSelector} from 'react-redux';
import Button from "../../shared/btn/Button";
import {MessageBox, LoadingBox} from '../../shared/ui/box/boxes'

const Header = () => {

    const {isLoadingCustomise, errorCustomise, customise} = useSelector(state => state.customiseReducer)
    const headersAvailable= !errorCustomise && !isLoadingCustomise && customise?.headers
    const { headers } = customise || {}

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    {errorCustomise && <MessageBox variant="errorVariant">{errorCustomise}</MessageBox>}
                    {isLoadingCustomise && <LoadingBox/>}
                    {headersAvailable &&
                    <div className="header__info">
                        <h1 className="header__info-title">{headers.wooden_interiors.title}</h1>
                        <Button
                            type="submit"
                            className="button-1"
                            name={headers.wooden_interiors.subtitle}
                        />
                        <p className="header__info-text">
                            {headers.wooden_interiors.text}
                        </p>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header