import React from "react";
import { Film } from "lucide-react";

const Skeleton = () => {
  return (
    <div className="mt-[6rem] grow flex flex-col justify-center items-center">
      <Film size={200} color="#cbd5e1" />
      <h1 className="text-4xl font-extrabold text-slate-300">
        Start Exploring
      </h1>
    </div>
  );
};

export default Skeleton;
