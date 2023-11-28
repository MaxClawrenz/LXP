import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("lxp_root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
