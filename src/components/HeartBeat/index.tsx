import Image from "next/image";
import heartHub from "../../../public/heart-hug.png";

const HeartHug = () => {
  return (
    <Image
      src={heartHub}
      width={360}
      height={350}
      alt="Coração com as maos a abraçar "
    />
  );
};
export default HeartHug;
