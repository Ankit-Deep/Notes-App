import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      
    </>
  )
}

export default Layout;
