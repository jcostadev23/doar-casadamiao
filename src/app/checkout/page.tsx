export const dynamic = "force-dynamic";

import HeartThanks from "@/components/HeartContainer";
import { getHeartNames } from "@/utils/apiCall";
import { use } from "react";

const Checkout = () => {
  const heartNames = use(getHeartNames());

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <HeartThanks heartNames={heartNames.slice(0, 1)} />
      <h1 className="text-2xl font-bold md:text-4xl">
        Obrigado pela sua doação
      </h1>
    </div>
  );
};

export default Checkout;
