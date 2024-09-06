import Cardplay from "../Cardplay/Cardplay";
import Welcomesearch from "../Welcomesearch/Welcomesearch";

const Maincontent = () => {
  return (
    <div className="w-full ">
      <Welcomesearch />
      {/* <div className="my-[100px] px-[40px]">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <div>
          <Cardplay text={"Ayomide"} num={"89"} />
        </div>
      </div> */}
    </div>
  );
};

export default Maincontent;
