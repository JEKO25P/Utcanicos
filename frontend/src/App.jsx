import Navbar from "./components/Navbar";
import "boxicons";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="flex flex-col ">
      <div className="">
        <Navbar />
      </div>
      <div className=" mt-16">
        <Card image={'src/assets/auto.jpeg.jpg'} />
      </div>
    </div>
  );
}