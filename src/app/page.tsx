
import DontMiss from "./components/Dontmiss";
import Essential from "./components/Essential";
import Featuredsection from "./components/Featured";
import GearUp from "./components/Gearup";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { CarouselSize } from "./components/Best";




export default function Home() {
  return (
  <main>
 
    <Hero/>
    <CarouselSize/>
    <Featuredsection/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  
  </main>
  )
}
