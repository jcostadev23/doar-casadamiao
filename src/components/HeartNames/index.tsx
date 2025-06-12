"use client";

import { useEffect, useState } from "react";

type Props = {
  heartNames: Array<{ heart_name: string }>;
};

const HeartNames: React.FC<Props> = ({ heartNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heartNames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heartNames]);

  return (
    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
      {heartNames[currentIndex]?.heart_name}
    </div>
  );
};

export default HeartNames;
