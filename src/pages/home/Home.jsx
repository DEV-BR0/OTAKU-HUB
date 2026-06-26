import { useEffect } from "react";
import Hero from '../../components/hero/Hero';
import HeroBottom from "../../components/section/HeroBottom";

function Home() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Home";
  }, []);

  return (
    <div className="w-full  flex flex-col items-center">
      <div className="relative w-full h-[400px]">
        <Hero />
      </div>
      <div className="relative w-full h-[40%] mt-[120px]">
        {/* <HeroBottom/> */}
      </div>
    </div>
  );
}

export default Home;
