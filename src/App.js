import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import EmptyBlock from "./components/ui/empty-block/EmptyBlock";
import FuelDelivery from "./components/fuel-delivery/FuelDelivery";
import FuelCost from "./components/fuel-cost/FuelCost";
import FuelWithDelivery from "./components/fuel-with-delivery/FuelWithDelivery";
import HowWeWork from "./components/how-we-work/HowWeWork";
import Advantages from "./components/advantages/Advantages";

//API
import fuel from './API/fuel/fuel.json';
import howWeWork from './API/how-we-work/howWeWork.json';

function App() {
  return (
    <>
      <section className="section section-white"><Header /></section>
      <section className="section section-gray"><Navigation /></section>
      <EmptyBlock height={90} />
      <section className="section section-white"><FuelDelivery /></section>
      <EmptyBlock height={100} />
      <section className="section section-white"><FuelCost fuel={fuel} /></section>
      <section className="section section-gray"><FuelWithDelivery fuel={fuel} /></section>
      <section className="section section-white"><HowWeWork howWeWork={howWeWork} /></section>
      <section className="section section-gray"><Advantages fuel={fuel} /></section>
      <div style={{ height: `1000px`, width: `100%` }}></div>
    </>
  );
}

export default App;
