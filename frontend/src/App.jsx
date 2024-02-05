import Navbar from "./components/Navbar";
import "boxicons";
import Card from "./components/Card";
import imagen from "./assets/auto.jpeg.jpg";

export default function App() {
  return (
    <div className="flex flex-col">
      <div >
        <Navbar />
      </div>
      <div className="mt-16">
        <Card image={imagen} />
      </div>
    </div>

  );
}