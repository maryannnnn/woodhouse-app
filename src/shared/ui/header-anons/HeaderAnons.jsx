import './header-anons.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox, LoadingBox } from '../box/boxes'
import { headerDetailsAction } from './actions/headerActions';

const HeaderAnons = () => {

  const dispatch = useDispatch();

  const headerBlockDetail = useSelector((state) => state.headerOneReducer);
  const { isLoadingHeader, errorHeader, header } = headerBlockDetail;

  const id = 1

  useEffect(() => {
    dispatch(headerDetailsAction(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoadingHeader && <LoadingBox></LoadingBox>}
      {errorHeader && <MessageBox variant="errorVariant">{errorHeader}</MessageBox>}
      <div className="header-anons">
        <div className="header-anons__left">
          <h2 className="header-anons__left-title">{header.title}</h2>
          <div className="header-anons__left-subtitle">{header.subtitle}</div>
        </div>
        <p className="header-anons__right">
          {header.text}
        </p>
      </div>
    </>
  )
}

export default HeaderAnons;