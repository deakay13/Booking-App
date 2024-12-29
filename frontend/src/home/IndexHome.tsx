import HeaderHome from "./Component/HeaderHome";
import FooterHome from "./Component/FooterHome";

import Hotels from "./Services/Hotels/Hotels";
import Flights from "./Services/Flights";
import BusAndShuttle from "./Services/Bus&Shuttle";
import CarRental from "./Services/CarRental";
import AirportTransfer from "./Services/AirportTransfer";
import ThingsToDo from "./Services/About";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

import { Routes, Route } from "react-router-dom";

function IndexHome() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500">
      <HeaderHome />
      <Routes>
        <Route path="/" element={ <Hotels/>} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Bus&Shuttle" element={<BusAndShuttle />} />
        <Route path="/CarRental" element={<CarRental />} />
        <Route path="/AirportTransfer" element={<AirportTransfer />} />
        <Route path="/ThingsToDo" element={<ThingsToDo />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <FooterHome />
    </div>
  );
}
export default IndexHome;
