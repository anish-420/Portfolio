import React from "react";

function Cards() {
  return (
    <div id="Insight-section" className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5 justify-center">
      <div className="cardcontainer w-1/2 h-[50vh] flex items-center justify-center">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src=""
            alt=""
          />
          <button className="absolute left-10 border-2 bottom-10 px-5 py-1 border-[#CDEA68] text-[#CDEA68] rounded-full">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121] ">
        <img
            className="w-32"
            src=""
            alt=""
          />
          <button className="absolute left-10 border-2 bottom-10 px-5 py-1 border-[#CDEA68] text-[#CDEA68] rounded-full">
            &copy;2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121] ">
        <img
            className="w-32"
            src=""
            alt=""
          />
          <button className="absolute left-10 border-2 bottom-10 px-5 py-1 border-[#CDEA68] text-[#CDEA68] rounded-full">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;


/*https://ochi.design/wp-content/uploads/2022/04/logo001.svg */