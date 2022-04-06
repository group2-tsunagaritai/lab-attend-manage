import { AuthContext } from "../utils/auth/Auth";
import { useContext } from "react";
export default function Header() {
  const auth = useContext(AuthContext);
  console.log(auth);
  const authed = auth.sid !== "";
  return (
    <div className="header">
      <h1>
        <a href="/">研究室出席モニタ（仮）</a>
      </h1>
      <ul>
        {authed ? (
          <>
            <li>
              <a href="./users">マイページ</a>
            </li>
            <li>
              <a href="./laboratories">研究室</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="./signin">SignIn</a>
            </li>
            <li>
              <a href="./signup">SignUp</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
