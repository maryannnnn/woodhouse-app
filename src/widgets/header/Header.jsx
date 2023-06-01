import './header.scss'
import './media.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../shared/btn/Button";
import { headerDetailsAction } from '../../shared/ui/header-anons/actions/headerActions';

const Header = () => {

  const dispatch = useDispatch();

  const headerMainDetail = useSelector((state) => state.headerZeroReducer);
  const { isLoadingHeader, errorHeader, header } = headerMainDetail;

  const id = 0

  useEffect(() => {
    dispatch(headerDetailsAction(id));
  }, [dispatch, id]);

  const clickHandlerDesign = () => {

  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__info">
            <h1 className="header__info-title">{header.title}</h1>
            <Button
              type="submit"
              className="button-1"
              onClick={clickHandlerDesign}
              name={header.subtitle}
            />
            <p className="header__info-text">
              {header.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header