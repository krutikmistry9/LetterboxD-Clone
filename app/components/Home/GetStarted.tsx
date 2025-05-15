import React from "react";

export const GetStarted = () => {
  return (
    <>
      <div
        className="started-backdrop block h-[250px] max-h-[250px] md:m-auto md:mt-[-5%] md:h-[650px] md:max-h-[650px] md:w-[950px]"
        style={{
          backgroundImage: `url(https://a.ltrbxd.com/resized/sm/upload/tx/hy/xj/lw/sanctuary-2023-1200-1200-675-675-crop-000000.jpg?v=b1d98010cd)`,
        }}
      ></div>

      <div className="relative z-40 mt-[5%] flex flex-col items-center gap-2 md:mt-[-15%]">
        <div className="gradient-helper-mobile text-center text-2xl font-bold text-[#fff] md:text-5xl">
          <p>Track films you’ve watched.</p>
          <p>Save those you want to see.</p>
          <p>Tell your friends what’s good.</p>
        </div>
        <button className="md:text-l hover:bg-b-h-green sans-serif  bg-b-green mt-1 h-10 rounded px-5 text-sm text-[#fff] md:px-8 ">
          GET STARTED - IT'S FREE!
        </button>

        <div className="sans-serif  text-sh-grey my-2 flex flex-col  items-center gap-2 text-xs md:flex-row  md:text-base   md:text-xl">
          <p>The social network for film lovers.</p>
          <p>Also available on iOS, Apple TV and Android</p>
        </div>
      </div>
    </>
  );
};
