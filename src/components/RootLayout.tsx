import React, { ReactElement } from "react";
import BottomHeader from "./header/BottomHeader";
import Header from "./header/Header";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }:Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
