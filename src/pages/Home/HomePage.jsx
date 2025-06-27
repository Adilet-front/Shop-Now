import { Bonjour } from "../../modules/Bonjour/Bonjour";
import { NewArrival } from "../../modules/NewArrival/NewArrival";
import { HeaderPart2 } from "../../modules/HeaderPart2/HeaderPart2";
import { ProductCard } from "../../modules/ProductCard/ProductCard";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <HeaderPart2 />
      <ProductCard />
      <NewArrival />
      <Bonjour />
    </div>
  );
};
