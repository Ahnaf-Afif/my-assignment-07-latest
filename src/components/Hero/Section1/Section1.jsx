import React from "react";

const Section1 = () => {
  return (
    <div className="grid grid-col justify-items-center mt-10 gap-3 max-w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Friends to keep close in your life
      </h1>
      <p className="text-center text-base opacity-80 md:max-w-2xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn">+Add Friend</button>
    </div>
  );
};

export default Section1;
