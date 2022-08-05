import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/AboutSection/About";
import Home from "./Pages/Home";
import FaqPage from "./Pages/AboutSection/FaqPage";
import Services from "./Pages/AboutSection/Service/Services";
import Team from "./Pages/AboutSection/Team/Team";
import Blogs from "./Pages/Blogs/Blogs";
import BlogLayout from "./Pages/Blogs/BlogLayout";
import PostFormates from "./Pages/Blogs/PostFormates";
import SideBar from "./Pages/Blogs/SideBar";
import Menu from "./Pages/Menu/Menu";
import DarkBeer from "./Pages/Menu/DarkBeer";
import DraftBeer from "./Pages/Menu/DraftBeer";
import LightBeer from "./Pages/Menu/LightBeer";
import Snacks from "./Pages/Menu/Snacks";
import Contact from "./Pages/Contact";
import Media from "./Pages/Media";
import Reservation from "./Pages/Reservation";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ABOUT SECTION */}
          <Route path="/about" element={<About />} />
          <Route path="/about/faqpage" element={<FaqPage />} />
          <Route path="/about/service" element={<Services />} />
          <Route path="/about/team" element={<Team />} />
          {/* BLOG SECTION */}
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/post" element={<PostFormates />} />
          <Route path="/blog/layout" element={<BlogLayout />} />
          <Route path="/blog/sidebar" element={<SideBar />} />
          {/* MENU SECTION */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/draftbeer" element={<DraftBeer />} />
          <Route path="/menu/snacks" element={<Snacks />} />
          <Route path="/menu/lightbeer" element={<LightBeer />} />
          <Route path="/menu/darkbeer" element={<DarkBeer />} />
          {/* OTHER SECTION */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
