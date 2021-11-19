import React from "react";

const Button = ({ variant, title }) => {
  return (
    <>
      {variant === "blue" && (
        <button className="w-full font-bold font-inter border py-2 rounded border-bluemid bg-bluelight text-bluedark">
          {title}
        </button>
      )}
      {variant === "green" && (
        <button className="w-full font-bold font-inter border py-2 rounded border-greenmid bg-greenlight text-greendark">
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
