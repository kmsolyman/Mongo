import HeroSection from "../components/HeroSection";
// import HeroSection from "./ComeBack/HeroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "kmsolymannitu",
  };

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;