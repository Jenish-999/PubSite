import React from "react";
import BottomFooter from "../Components/BottomFooter";
import FooterSection from "../Components/FooterSection";
import SubHeader from "../Components/SubHeader";
import TopHeader from "../Components/TopHeader";

function Wapper({ children }) {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <TopHeader />
        <SubHeader />
        <main className="flex-fill">{children}</main>
        <FooterSection />
        <BottomFooter />
      </div>
    </>
  );
}

export default Wapper;
