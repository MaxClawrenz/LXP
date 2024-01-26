import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import LeftZone from "./LeftPannel/LeftZone";
import MainPage from "./MainPage";
import MainPageChannels from "./MainPageChannels";
import styles from "../style.module.css";
import MainZoneOtherChannel from "./MainZone/MainZoneOtherChannel";

function App() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <LeftZone />

        <Routes>
          <Route
            path="/_wt/eqvatoria_lxp_channels"
            element={<MainPageChannels />}
          />
          <Route path="/_wt/lxp" element={<MainPage />} />
          <Route path="/_wt/eqvatoria_lxp_channels/:channelId" element={<MainZoneOtherChannel />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
