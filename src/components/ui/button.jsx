import React from "react";

const button = () => {
  return (
    <div>
      <button className="px-12 dark:bg-primary  hover-shadow-xl py-4 rounded-full bg-primary font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-secondary transition-colors duration-200">
        Spotify
      </button>

      <button className="inline-flex px-12 py-4  animate-shimmer items-center justify-center rounded-full border border-secondary bg-[linear-gradient(110deg,#C980FF,45%,#ffffff,55%,#C980FF)]  bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white">
        Shimmer
      </button>
    </div>
  );
};

export default button;
