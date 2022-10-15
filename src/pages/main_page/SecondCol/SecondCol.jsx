import MainSection from "../Main-section";
import Cards from "../Cards";
import MultiCards from "../MultiCards/MultiCards";
import Text from '../Text'

export default function Slider() {
  return (
    <div className="w-[63%] mt-20 mx-auto bg-gray">
      <MainSection/>
      <Cards/>
      <MultiCards/>
      <Text/>
    </div>
  );
}

