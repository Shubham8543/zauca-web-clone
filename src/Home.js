import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Screen/Header";
import MenuBar from "./Screen/MenuBar";
import Body from "./Screen/Body";
import Body2 from "./Screen/Body2";
import Footer from "./Screen/Footer";
import Business from "./Screen/Business ";
import Ecommerce from "./Screen/Ecommerce";
import Portfolio from "./Screen/Portfolio";
import Startup from "./Screen/Startup";
import Gst from "./Screen/Gst";
import About from "./Screen/About";
import Things from "./Screen/Things";
import Blog from "./Screen/Blog";
import Website from "./Screen/Website";
import Contect from "./Screen/Contect";

const Home = () => {
  return (
    <ChakraProvider>
      <Header />
      <MenuBar />
      <Body />
      <Body2 />
      <Business />
      <Ecommerce />
      <Portfolio /> // issue//
      <Startup />  // issue//
      <Gst />
      <About />
      <Things /> issue//
      <Blog/>
      <Website/>
      <Contect/>
      <Footer />
    </ChakraProvider>
  );
};

export default Home;
