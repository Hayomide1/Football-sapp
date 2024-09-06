import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Maincontent from "../components/Maincontent/Maincontent";

const DashboardLayout = ({ children }) => {
  return (
    <div className="font-FivoSans flex w-screen">
      <Sidebar />
      <div className="flex-1 bg-[#FFFBFB]">
        <Maincontent />
        <div className="my-20 px-8 py-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
