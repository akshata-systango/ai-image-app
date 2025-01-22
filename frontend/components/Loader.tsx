import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="border-t-4 border-t-blue-500 rounded-full w-20 h-20 animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
