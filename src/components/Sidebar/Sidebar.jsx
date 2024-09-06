import { MdDashboard } from "react-icons/md";
import Navlist from "../Navlist/Navlist";
import Profilemanage from "../Profilemanage/Profilemanage";

const Sidebar = () => {
  return (
    <div className="w-[280px] border-x-[1px] border-x-[#E0E0E0] h-screen px-[16px] py-[24px]  bg-[#FFFBFB]">
      <div>
        <Profilemanage />
        <Navlist />
      </div>
    </div>
  );
};

export default Sidebar;
