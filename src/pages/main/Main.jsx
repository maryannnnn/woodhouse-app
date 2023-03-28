import { useEffect } from 'react';
import './main.scss'
import Header from "../../widgets/header/Header";
import Trust from "../../widgets/trust/Trust";
import About from "../../widgets/about/About";
import Partner from "../../widgets/partners/Partner";
import AnonsWidget from "../../widgets/anons/anons-portfolio/AnonsWidget";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { portfolioListAction } from '../../entities/portfolio/actions/portfolioActions';
import { headerListAction } from '../../shared/ui/header-anons/actions/headerActions';
import { findObjectBiId } from '../../app/utilities/service'

const Main = () => {
  // const { pageNumber = 1 } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(portfolioListAction())
    dispatch(headerListAction())
  }, [dispatch])

  const portfolioList = useSelector(state => state.portfolioListReducer)
  const { isloadingPortfolio, errorPortfolio, projects } = portfolioList

  const headerList = useSelector(state => state.headerListReducer)
  const { isLoadingHeader, errorHeader, headers } = headerList

  return (
    <div className="main">
      {console.log("projects", ...projects)}
      {console.log("headers", ...headers)}
      <Header headerMain={findObjectBiId(headers, 0)} />
      <Trust />
      <AnonsWidget headerPortfolio={findObjectBiId(headers, 1)} body={projects} />
      <About />
      <Partner />
    </div>
  )
}

export default Main