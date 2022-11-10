import MainSection from "../Main-section";
import Cards from "../Cards";
import MultiCards from "../MultiCards/MultiCards";
import Text from '../Text'
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Slider({meals}) {

  return (
    <div className="w-[63%]  mx-auto bg-gray">
      <Navbar/>
      <MainSection meals={meals} />
      <Cards/>
      <MultiCards  meals={meals}/>
      <Text/>
      <Footer/>
    </div>
  );
}

