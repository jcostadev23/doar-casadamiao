import { getHeartNames } from "@/lib/mongodb";

const HeartNames = async () => {
  const heartNames = await getHeartNames();

  return (
    <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold text-xl">
      {heartNames[0]?.heart_name}
    </div>
  );
};

export default HeartNames;
