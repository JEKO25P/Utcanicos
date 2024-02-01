import Navbar from "./components/Navbar";
import "boxicons";
import Card from "./components/Card";
import imagen from "./assets/istockphoto-1478431022-1024x1024.jpg";
export default function App() {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-16">
        <Card image={imagen} />
      </div>
    </div>
  );
}