import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './main.scss'
import Header from "../../widgets/header/Header";
import Trust from "../../widgets/trust/Trust";
import Partner from "../../widgets/partners/Partner";
import AnonsPortfolio from "../../widgets/anons/anons-portfolio/AnonsPortfolio";
//import { Link, useParams } from 'react-router-dom';
import { headerListAction } from '../../shared/ui/header-anons/actions/headerActions';
import { ArrayDto } from '../../app/dto/arrayDto.js'

const Main = () => {
  // const { pageNumber = 1 } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerListAction())
  }, [dispatch])

  const headerList = useSelector(state => state.headerListReducer)
  const { isLoadingHeader, errorHeader, headers } = headerList

  const headerListDto = new ArrayDto(headers, isLoadingHeader, errorHeader)

  return (
    <div className="main">
      {console.log("headersMain", headers)}
      <Header headerListDto={headerListDto} />
      <Trust />
      <AnonsPortfolio headerListDto={headerListDto} />
      <Partner />
    </div>
  )
}

export default Main