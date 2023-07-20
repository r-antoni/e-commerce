import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
