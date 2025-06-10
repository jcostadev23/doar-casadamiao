"use client";

import { useEffect, useState } from "react";

type HeartName = {
  _id: string;
  date: string;
  heart_name: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const HeartNames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heartNames, setHeartNames] = useState<Array<HeartName>>([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`${BASE_URL}/api/payments`).then((data) =>
        data.json()
      );

      if (!resp) {
        return false;
      }

      setHeartNames(resp.value);
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
    <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold text-xl">
      {heartNames[currentIndex]?.heart_name}
    </div>
  );
};

export default HeartNames;
