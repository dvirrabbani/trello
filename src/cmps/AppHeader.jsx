import { useSelector } from "react-redux";

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user);

  return <header className="app-header"></header>;
}
