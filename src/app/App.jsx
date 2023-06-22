import './scss/app.scss'
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "../pages/main/Main";
import Footer from "../widgets/footer/Footer";
import Navigation from "../widgets/navigation/Navigation";
import Portfolio from "../pages/portfolio/Portfolio";
import Project from "../pages/project/Project";
import Service from "../pages/service/Service";
import Blog from "../pages/blog/Blog";
import Post from "../pages/post/Post";
import CategoriesAll from "../pages/categoryall/CategoriesAll";
import Architect from "../pages/architect/Architect";
import ArchitectsAll from "../pages/architectsAll/ArchitectsAll";
import {getCustomise} from "../shared/customise/api/customiseActions";
import Category from "../entities/category/ui/Category";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCustomise())
    }, [dispatch])

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/portfolio/:id" element={<Project/>}/>
                    <Route path="/category" element={<CategoriesAll/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                    <Route path="/architect" element={<ArchitectsAll/>}/>
                    <Route path="/architect/:id" element={<Architect/>}/>
                    <Route path="/service/:id" element={<Service/>}/>
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
