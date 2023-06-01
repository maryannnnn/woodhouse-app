import './scss/app.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuListAction } from '../shared/ui/menu/actions/menuActions';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from "../pages/main/Main";
import Footer from "../widgets/footer/Footer";
import Navigation from "../widgets/navigation/Navigation";
import Portfolio from "../pages/portfolio/Portfolio";
import Project from "../pages/project/Project";
import Service from "../pages/service/Service";
import Blog from "../pages/blog/Blog";
import Post from "../pages/post/Post";
import { ArrayDto } from './dto/arrayDto.js'
import Category from "../entities/category/ui/Category";
import CategoriesAll from "../pages/categoryall/CategoriesAll";
import Architect from "../pages/architect/Architect";
import ArchitectsAll from "../pages/architectsAll/ArchitectsAll";

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<Project />} />
          <Route path="/category" element={<CategoriesAll />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/architect" element={<ArchitectsAll />} />
          <Route path="/architect/:id" element={<Architect />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer menuListDto={menuListDto} />
      </BrowserRouter>
    </div>
  );
}

export default App;
