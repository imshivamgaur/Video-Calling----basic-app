import LobbyScreen from "./screens/LobbyScreen";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Room from "./screens/Room";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
};

export default App;
