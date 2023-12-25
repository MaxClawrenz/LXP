import { ITabRouteProps } from "../../../interfaces/ITabRouteProps";
import TabElement from "./TabElement";

const TabRoute = ({ name, children }: ITabRouteProps) => {
  return <TabElement name={name}>{children}</TabElement>;
};

export default TabRoute;
