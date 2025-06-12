import HeartHug from "@/components/HeartBeat";
import { getHeartNames } from "@/utils/apiCall";
import { use } from "react";

const Checkout = () => {
  const heartNames = use(getHeartNames());

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="relative w-[600px] h-[400px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <HeartHug />
        </div>
        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
          Obrigado
        </div>
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
          {heartNames[0]?.heart_name}
        </div>
      </div>
      <h1 className="text-2xl font-bold md:text-4xl">
        Obrigado pela sua doação
      </h1>
    </div>
  );
};

export default Checkout;
