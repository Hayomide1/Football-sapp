import React, { useState } from "react";

import Dashboard from "../../assets/dashboard.svg";
import Teams from "../../assets/T-shirt.svg";
import Event from "../../assets/events.svg";
import Fans from "../../assets/User-hands.svg";
import Financial from "../../assets/Diagram-down.svg";
import Sponsor from "../../assets/hand-shake.svg";
import Profile from "../../assets/profile.svg";
import Settings from "../../assets/settings.svg";
import Logout from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";

const Navlist = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const navlists = [
    { name: "Overview", img: Dashboard, route: "/" },
    { name: "My Teams", img: Teams, route: "/team" },
    { name: "Events", img: Event, route: "/events" },
    { name: "Fans", img: Fans, route: "/fans" },
    { name: "Financial", img: Financial, route: "/financials" },
    { name: "Sponsorship", img: Sponsor },
    { name: "Profile", img: Profile },
    { name: "Settings", img: Settings },
    { name: "Logout", img: Logout },
  ];

  const navigate = useNavigate();

  const handleItemClick = (name, route) => {
    setActiveItem(name);
    navigate(route);
  };
  return (
    <div>
      <div>
        {navlists.map((navlist, index) => (
          <div
            key={navlist.name}
            className={`flex items-center gap-4 px-5 py-3  my-1 rounded-[15px] cursor-pointer ${
              activeItem === navlist.name
                ? "bg-[#B20900] text-[#FAFAFA]"
                : "bg-[#FAFAFA] text-[#171717]"
            }  ${
              index === navlists.length - 1 ? "mt-[65px] flex-grow" : "my-1"
            }`}
            onClick={() => handleItemClick(navlist.name, navlist.route)}
          >
            <img
              src={navlist.img}
              alt={`${navlist.name} icon`}
              className={`w-6 h-6  ${
                activeItem === navlist.name ? "opacity-100" : "opacity-60"
              }`}
            />
            <h1 className="text-[16px] font-normal">{navlist.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navlist;
