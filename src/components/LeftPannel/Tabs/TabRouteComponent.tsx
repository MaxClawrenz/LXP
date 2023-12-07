import { ITabRouteProps } from "../../../interfaces/ITabRouteProps";
import TabElement from "./TabElement";

const TabRoute: React.FC<ITabRouteProps> = ({ name, children }) => (
    <TabElement name={name}>{children}</TabElement>
  );

  export default TabRoute