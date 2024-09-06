import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const PlayerDetails = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center gap-3">
          <Link to="/team">
            <FaArrowLeft />
          </Link>
          <p className="text-lg font-semibold">{state.name}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlayerDetails;
