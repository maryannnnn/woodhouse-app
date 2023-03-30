import './scss/app.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuListAction } from '../shared/ui/menu/actions/menuActions';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from "../pages/main/Main";
import Footer from "../widgets/footer/Footer";
import Navigation from "../widgets/navigation/Navigation";
import Portfolio from "../pages/projects/Portfolio";
import Service from "../pages/service/Service";
import Blog from "../pages/blog/Blog";
import Post from "../pages/post/Post";
import { ArrayDto } from './dto/arrayDto.js'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(menuListAction())
  }, [dispatch])

  const menuList = useSelector(state => state.menuListReducer)
  const { isLoadingMenu, errorMenu, menus } = menuList

  const menuListDto = new ArrayDto(menus, isLoadingMenu, errorMenu)

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navigation menuListDto={menuListDto} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio: id" element={<Portfolio />} />
          <Route path="/service: id" element={<Service />} />
          <Route path="/post: id" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer menuListDto={menuListDto} />
      </BrowserRouter>
    </div>
  );
}

export default App;
