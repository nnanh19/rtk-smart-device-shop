import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../admin/categories/Categories";
import Footer from "./admin/Footer";
import Header from "./admin/Header";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-[#E5E5E5]">
        <div
          className="
          "
        >
          <div
            className="
            flex-row
            grid grid-cols-5
            "
          >
            <Categories />
            <div className="col-span-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
