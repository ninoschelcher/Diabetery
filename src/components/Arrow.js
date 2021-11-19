import { BiLeftArrowAlt, BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const Arrow = ({ type, onClick }) => {
  return (
    <>
      {type === "left" && (
        <BiLeftArrowAlt onClick={onClick} className="bg-bluelight rounded-full text-bluedark h-6 w-6 p-1 cursor-pointer" />
      )}
      {type === "right" && (
        <BiRightArrowAlt onClick={onClick}className="bg-bluelight rounded-full text-bluedark h-6 w-6 p-1 cursor-pointer" />
      )}
      {type === "bottom" && (
        <BiDownArrowAlt onClick={onClick} className="bg-bluelight rounded-full text-bluedark h-6 w-6 p-1 cursor-pointer" />
      )}
    </>
  );
};

export default Arrow;
