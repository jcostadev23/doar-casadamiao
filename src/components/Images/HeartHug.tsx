import Image from "next/image";
import heartHug from "../../../public/heart-hug.png";

const HeartHug = () => {
  return (
    <Image
      src={heartHug}
      width={360}
      height={350}
      alt="Coração com as maos a abraçar "
    />
  );
};
export default HeartHug;
