import { Routes, Route } from "react-router-dom";

import DashBoard from "./DashBoard";
import TabUsers from "./ManagementUsers/Users/TabUsers";
import Roles from "./ManagementUsers/Roles";
import About from "./About";
import Profiles from "./Profiles";
import AirportTransfers from "./ManagementServices/AirportTransfers";
import BusAndShuttles from "./ManagementServices/Bus&Shuttle";
import CarRental from "./ManagementServices/CarRental";
import Flights from "./ManagementServices/Flights";
import Hotels from "./ManagementServices/Hotels";
import Rooms from "./ManagementServices/Rooms";

export default function IndexFunctions() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/TabUsers" element={<TabUsers />} />
      <Route path="/Roles" element={<Roles />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profiles" element={<Profiles />} />
      <Route path="/AirportTransfers" element={<AirportTransfers />} />
      <Route path="/Bus&Shuttle" element={<BusAndShuttles />} />
      <Route path="/CarRental" element={<CarRental />} />
      <Route path="/Flights" element={<Flights />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Rooms" element={<Rooms />} />
    </Routes>
  );
}
