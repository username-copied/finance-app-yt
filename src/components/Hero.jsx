import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl  font-bold">
          Grow With Data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
            <Typed
              strings={[" BTB", " BTC", " SAAS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
