import { Routes, Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import LeftZone from "./LeftPannel/LeftZone";
import MainPage from "./MainPage";


function App() {
  return (
    <>
      <Header />
      <LeftZone />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
