import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Menemen from "./pages/menemen.js";
import Waffles from "./pages/waffles.js";
import Cheesecake from "./pages/cheesecake.js";
import ChickenSalad from "./pages/chickensalad.js";
import KungPaoChicken from "./pages/kungpaochicken.js";
import Spaghetti from "./pages/spaghetti.js";
import CinnamonRolls from "./pages/cinnamonrolls.js";

import Team from "./pages/team.js";
import NoPage from "./pages/nopage.js";
import "./index.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menemen" element={<Menemen />}/>
          <Route path="waffles" element={<Waffles />} />
          <Route path="cheesecake" element={<Cheesecake />} />
          <Route path="chickensalad" element={<ChickenSalad />} />
          <Route path="kungpaochicken" element={<KungPaoChicken />} />
          <Route path="spaghetti" element={<Spaghetti />} />
          <Route path="cinnamonrolls" element={<CinnamonRolls />} />
          <Route path="Team" element={<Team />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);