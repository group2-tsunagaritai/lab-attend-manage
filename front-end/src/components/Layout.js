import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Layout() {
  return (
    <div>
      <h1>レイアウトコンポーネント</h1>
      <p>ヘッダーなどをここに設置</p>
      <div className="flex gap-4 m-4">
        <ul>
          <li>
            <a href="/">Top</a>
          </li>
          <li>
            <a href="/signin">SignIn</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/users/1">user info</a>
          </li>
          <li>
            <a href="/users/1/edit">user edit</a>
          </li>
          <li>
            <a href="/users/1/log">user log</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/laboratory/1">laboratory info</a>
          </li>
          <li>
            <a href="/laboratory/1/edit">laboratory edit</a>
          </li>
          <li>
            <a href="/laboratory/1/new">laboratory new</a>
          </li>
          <li>
            <a href="/laboratory/1/schedule">laboratory schedule info</a>
          </li>
          <li>
            <a href="/laboratory/1/schedule/new">laboratory schedule new</a>
          </li>
        </ul>
      </div>
      <Header />
      <Outlet />
    </div>
  );
}
