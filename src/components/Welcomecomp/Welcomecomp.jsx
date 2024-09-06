import Arrowleft from "../../assets/arr-left.svg";
import Arrowright from "../../assets/arr-right.svg";

const Welcomecomp = () => {
  return (
    <div>
      <div className="flex gap-[16px] items-center">
        <div className="flex gap-[8px]">
          <div className="h-[24px] w-[24px] cursor-pointer">
            <img src={Arrowleft} alt="Arrowleft" />
          </div>
          <div className="h-[24px] w-[24px] cursor-pointer">
            <img src={Arrowright} alt="Arrowright" />
          </div>
        </div>
        <div>
          <h1 className="text-base">Welcome,</h1>
          <h1 className="text-base">Akinwumi Ayomide </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcomecomp;
