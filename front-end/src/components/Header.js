import { AuthContext } from "../utils/auth/Auth";
import { useContext, useEffect } from "react";
export default function Header() {
  const { authData, setAuthData } = useContext(AuthContext);
  console.log("authData", authData);
  const authed = authData.jwt !== "";
  return (
    <div className="header">
      <h1>
        <a href="/">Rooms</a>
      </h1>
      <ul>
        {authed ? (
          <>
            <li>
              <a href={`/users/${authData.uid}`}>マイページ</a>
            </li>
            <li>
              <a href="/laboratories">研究室</a>
            </li>
            <li>
              <a href={`/users/${authData.uid}/log`}>在室記録</a>
            </li>
            <li>
              <p
                className="cursor-pointer"
                onClick={() => {
                  console.log("signout event");
                  localStorage.setItem(
                    "authData",
                    JSON.stringify({ jwt: "", uid: "", lid: "" })
                  );
                  setAuthData({ jwt: "", uid: "", lid: "" });
                }}
              >
                SignOut
              </p>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/signin">SignIn</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
