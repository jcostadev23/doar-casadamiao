import HeartHug from "@/components/Images/HeartHug";
import HeartNames from "../HeartNames";
import { ReactElement } from "react";

type Props = {
  element?: ReactElement | string;
};

const HeartThanks: React.FC<Props> = ({ element }) => {
  return (
    <div className="relative w-[600px] h-[400px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heartbeat">
        <HeartHug />
      </div>
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl animate-heartbeat">
        Obrigado
      </div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
        {element ?? <HeartNames />}
      </div>
    </div>
  );
};

export default HeartThanks;
