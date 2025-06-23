
import { Bonjour } from "../../modules/Bonjour/Bonjour";
import { NewArrival } from "../../modules/NewArrival/NewArrival";
import { HeaderPart2 } from "../../modules/HeaderPart2/HeaderPart2";

export const HomePage = () => {
  return (
    <div className="HomePage">
       <HeaderPart2 />
      <NewArrival />
      <Bonjour />
   
    </div>
  );
};
