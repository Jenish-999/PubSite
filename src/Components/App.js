import React from "react";
import BeerListSection from "./BeerListSection";
import BottomFooter from "./BottomFooter";
import FooterSection from "./FooterSection";
import GallerySection from "./GallerySection";
import InfoSection from "./InfoSection";
import MainTheme from "./MainTheme";
import MediaSection from "./MediaSection";
import MenuSection from "./MenuSection";
import SubHeader from "./SubHeader";
import Testimonial from "./Testimonial";
import TopHeader from "./TopHeader";

function App() {
  return (
    <div className="App">
      <>
        <TopHeader />
        <SubHeader />
        <MainTheme />
        <MenuSection />
        <InfoSection />
        <BeerListSection />
        <Testimonial />
        <GallerySection />
        <MediaSection />
        <FooterSection />
        <BottomFooter />
      </>
    </div>
  );
}

export default App;
