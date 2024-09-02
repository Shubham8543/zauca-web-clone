import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Support from "./Screen/supportDashboard/Support";
import Home from "./Home";
import Home2 from "./Screen/supportDashboard/Home2";
import Browser from "./Screen/supportDashboard/Browser";
import Contact from "./Screen/supportDashboard/Contact";
import Login from "./Screen/supportDashboard/Account/Login";
// import Navbar from "./Screen/supportDashboard/Navbar";
import Announcements from "./Screen/supportDashboard/Announcements";
import Knowledgebase from "./Screen/supportDashboard/knowledgebase";
import Network from "./Screen/supportDashboard/Network";
import Register from "./Screen/supportDashboard/Account/Register ";
import Password from "./Screen/supportDashboard/Account/Password";
import View from "./Screen/supportDashboard/Account/View";
import Bussines2 from "./Screen/supportDashboard/Bussines2";
import Ecommerce2 from "./Screen/supportDashboard/Ecommerce2";
import Domain from "./Screen/supportDashboard/Domain";

export const Main = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home2 />} />
          <Route path="/Contact_Us" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Announcements" element={<Announcements />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/Network_status" element={<Network />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Forgot_Password" element={<Password />} />
          <Route path="/Cart" element={<View />} />
          <Route path="/Browse_all" element={< Bussines2/>} />
          <Route path="/Business_website" element={< Bussines2/>} />
          <Route path="/e-Commerce_website" element={< Ecommerce2/>} />
          <Route path="/Transfer_Domain" element={< Domain  />} />



        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
