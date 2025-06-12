"use client";

import HeartThanks from "@/components/HeartContainer";
import Loading from "@/components/Loader";
import { getHeartNames } from "@/utils/apiCall";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [heartName, setHeartName] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const names = await getHeartNames();

      if (!names) {
        return false;
      }

      setHeartName(names[0]?.heart_name);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <HeartThanks element={isLoading ? <Loading /> : heartName} />
      <h1 className="text-2xl font-bold md:text-4xl">
        Obrigado pela sua doação
      </h1>
    </div>
  );
};

export default Checkout;
