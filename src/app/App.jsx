import './scss/app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from "../pages/main/Main";
import Footer from "../widgets/footer/Footer";
import Navigation from "../widgets/navigation/Navigation";
import Portfolio from "../pages/projects/Portfolio";
import Service from "../pages/service/Service";
import Blog from "../pages/blog/Blog";
import Post from "../pages/post/Post";
import Company from "../pages/company/Company";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio: slug" element={<Portfolio />} />
          <Route path="/service: slug" element={<Service />} />
          <Route path="/post: slug" element={<Post />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
