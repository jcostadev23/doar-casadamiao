"use client";

import { getHeartNames } from "@/utils/apiCall";
import { useEffect, useState } from "react";
import Loading from "../Loader";

type HeartName = {
  _id: string;
  date: string;
  heart_name: string;
};

const HeartNames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [heartNames, setHeartNames] = useState<Array<HeartName>>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const names = await getHeartNames();

      if (!names) {
        return false;
      }

      setHeartNames(names);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!heartNames || heartNames.length === 0) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heartNames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heartNames]);

  return (
    <div>{isLoading ? <Loading /> : heartNames[currentIndex]?.heart_name}</div>
  );
};

export default HeartNames;
