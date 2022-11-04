import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import EmptyBlock from "./components/ui/empty-block/EmptyBlock";
import FuelDelivery from "./components/fuel-delivery/FuelDelivery";
import FuelCost from "./components/fuel-cost/FuelCost";
import FuelWithDelivery from "./components/fuel-with-delivery/FuelWithDelivery";
import HowWeWork from "./components/how-we-work/HowWeWork";
import Advantages from "./components/advantages/Advantages";
import Certificate from "./components/certificate/Certificate";
import OurPartners from "./components/our-partners/OurPartners";
import Reviews from "./components/reviews/Reviews";
import imageBg from "./assets/images/ImageBg.png";

//API
import fuel from './API/fuel/fuel.json';
import howWeWork from './API/how-we-work/howWeWork.json';
import advantages from './API/advantages/advantages.json';
import certificat from './API/cartificate/certificate.json';
import partners from './API/partner/partner.json';
import reviews from './API/reviews/reviews.json';

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
      <section className="section section-gray"><Advantages advantages={advantages} /></section>
      <section className="section section-white"><Certificate certificat={certificat} /></section>
      <section className="section section-white"><OurPartners partners={partners} /></section>
      <section className="section section-gray"><Reviews reviews={reviews} /></section>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
