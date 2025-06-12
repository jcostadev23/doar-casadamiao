"use client";

import { useEffect, useState } from "react";

type Props = {
  heartNames: Array<{ heart_name: string }>;
};

const HeartNames: React.FC<Props> = ({ heartNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!heartNames || heartNames.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heartNames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heartNames]);

  return <>{heartNames[currentIndex]?.heart_name}</>;
};

export default HeartNames;
