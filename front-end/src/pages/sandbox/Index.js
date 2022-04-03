import { Outlet } from "react-router-dom";
import Index from "../../components/Index";

export default function Sandbox() {
  return (
    <div className="m-4">
      <p>見本用のいろいろをまとめたページ</p>
      <Index
        hrefs={[
          "/sandbox",
          "/sandbox/ask",
          "/sandbox/counter",
          "/sandbox/pikachu",
          "/sandbox/dog",
          "/sandbox/dragndrop",
          "/sandbox/netsh"
        ]}
      />
      <Outlet />
    </div>
  );
}
