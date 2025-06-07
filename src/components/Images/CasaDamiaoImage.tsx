import Image from "next/image";
import casaDamiao from "../../../public/logo-damiao.jpg";

const CasaDamiaoImage = () => {
  return (
    <Image
      src={casaDamiao}
      width={200}
      height={200}
      sizes="100vw"
      alt="crianças a brincar"
      style={{ width: "100%", height: "auto" }}
    />
  );
};
export default CasaDamiaoImage;
