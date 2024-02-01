import Navbar from "./components/Navbar";
import "boxicons";
import Card from "./components/Card";
import imagen from "./assets/auto.jpg";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-16">
        <Card image={imagen} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}