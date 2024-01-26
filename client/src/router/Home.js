
import { useLocation } from "react-router-dom";
import FeatureProduct from "../components/FeatureProduct";
// import FeatureProduct from "./ComeBack/FeatureProduct";

import HeroSection from "../components/HeroSection";
// import HeroSection from "./ComeBack/HeroSection";

import Services from "../components/Services";
// import Services from "./ComeBack/Services";

import Trusted from "../components/Trusted";
// import Trusted from "./ComeBack/Trusted";
import { Location } from "react-router-dom";
const Home = () => {
  // const location = useLocation();
  const data = 
   {
    name: "kHAN-SHOP" ,
  
  };

  return (
    <>
      <HeroSection myData={data}  />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;