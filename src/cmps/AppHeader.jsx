import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SvgIcon from "./SvgIcon";

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user);

  return (
    <header className="app-header">
      <Link to={"/workspace"}>
        <SvgIcon iconName={"logo"} size={"lg"} />
      </Link>
      <SvgIcon iconName={"profile"} size={"md"} />
    </header>
  );
}
