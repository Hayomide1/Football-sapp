import Cardbtn from "../../assets/ham-btn.svg";

const Cardplay = ({ text, num }) => {
  return (
    <div className="w-[167px] h-[175px] bg-[#FFFFFF] border border-[#E4E4E7] rounded-[15px]">
      <img src={Cardbtn} alt="" className="item-right" />

      <div>
        <p>{text}</p>
        <p>{num}</p>
      </div>
    </div>
  );
};

export default Cardplay;
