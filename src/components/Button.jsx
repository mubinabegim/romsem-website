import React from "react";

function Button({ classes, children = "Хочу!", func }) {
  const handleClick = (e) => {
    e.stopPropagation();
    func();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`py-2 rounded px-10 xl:2xl text-base text-white bg-orange-600 hover:bg-orange-400 font-semibold ${classes}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
