import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'boxicons'
import Card from "./components/Card";

export default function App(){
  return(
    <div className="flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div >
        <Card
        />
      </div>
    </div>
       
  )
}