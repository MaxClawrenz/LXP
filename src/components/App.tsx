import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import LeftZone from "./LeftPannel/LeftZone";
import MainPage from "./MainPage";
import MainPageChannels from "./MainPageChannels";
import styles from "../style.module.css";


function App() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <LeftZone />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/_wt/eqvatoria_lxp_channels" element={<MainPageChannels />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
