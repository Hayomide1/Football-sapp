import Search from "../../assets/search.svg";

const Searchcomp = () => {
  return (
    <div className="w-[650px]">
      <input
        type="text"
        placeholder="Search"
        className="  w-[500px] text-[18px] items-center py-[12px] pl-[40px] pr-4 text-gray-700 bg-white border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-red-600"
        style={{
          backgroundImage: `url(${Search})`,
          backgroundPosition: "10px center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Searchcomp;
