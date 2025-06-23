import { Bonjour } from "../../modules/Bonjour/Bonjour";
import { NewArrival } from "../../modules/NewArrival/NewArrival";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <NewArrival />
      <Bonjour />
    </div>
  );
};
