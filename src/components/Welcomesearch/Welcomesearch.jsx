import Searchcomp from "../Searchcomp/Searchcomp";
import Welcomecomp from "../Welcomecomp/Welcomecomp";

const Welcomesearch = () => {
  return (
    <div className="w-full h-[80px] border-b-[1px] px-[40px] py-[16.5px] border-b-[#E0E0E0] flex gap-[350px] items-center fixed top-0  bg-[#FFFBFB] ">
      <Welcomecomp />
      <Searchcomp />
    </div>
  );
};

export default Welcomesearch;
