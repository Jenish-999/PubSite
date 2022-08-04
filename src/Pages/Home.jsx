import React from "react";
import Wapper from "../CommonComponents/Wapper";
import BeerListSection from "../Components/BeerListSection";
import GallerySection from "../Components/GallerySection";
import InfoSection from "../Components/InfoSection";
import MainTheme from "../Components/MainTheme";
import MediaSection from "../Components/MediaSection";
import MenuSection from "../Components/MenuSection";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <>
      <Wapper>
        <div>
          <MainTheme />
          <MenuSection />
          <InfoSection />
          <BeerListSection />
          <Testimonial />
          <GallerySection />
          <MediaSection />
        </div>
      </Wapper>
    </>
  );
}

export default Home;
