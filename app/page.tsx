import Image from "next/image";
import HeroComponent from "./components/Hero-Component/HeroComponent";
import { Timeline } from "./components/Timeline/TimeLineComponent";
import Feature from "./components/Feature-Component/Feature";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <>
   
    <HeroComponent/>
    <Feature />
    <Timeline/>
    <Footer/>

    <h1>
      Om Shri Devathammaiah Namaha
    </h1>
    </>
   
  );
}
