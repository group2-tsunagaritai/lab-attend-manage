import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Layout() {
  return (
    <div>
      <Header />
      <div className="layout-container" style={{ marginTop: "2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
