import HeartHug from "@/components/HeartBeat";
import { getHeartNames } from "@/utils/apiCall";

const HeartThanks = async () => {
  const heartNames = await getHeartNames();
  const ultima_Entrada = heartNames.length - 1;

  return (
    <div className="relative w-[600px] h-[400px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heartbeat">
        <HeartHug />
      </div>
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl animate-heartbeat">
        Obrigado
      </div>
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold text-xl">
        {heartNames[ultima_Entrada].heart_name}
      </div>
    </div>
  );
};

export default HeartThanks;
