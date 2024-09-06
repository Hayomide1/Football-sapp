import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import PlayerDetails from "./pages/PlayerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:playerName" element={<PlayerDetails/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
