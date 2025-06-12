import HeartHug from "@/components/HeartBeat";
import { getHeartNames } from "@/utils/apiCall";
import { use } from "react";
import HeartNames from "../HeartNames";

const HeartThanks = () => {
  const heartNames = use(getHeartNames());

  return (
    <div className="relative w-[600px] h-[400px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heartbeat">
        <HeartHug />
      </div>
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl animate-heartbeat">
        Obrigado
      </div>
      <HeartNames
        heartNames={heartNames.map(({ heart_name }) => ({
          heart_name,
        }))}
      />
    </div>
  );
};

export default HeartThanks;
