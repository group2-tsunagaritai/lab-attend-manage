import { AuthContext } from "../utils/auth/Auth";
import { useContext, useState } from "react";
import { useUser } from "../utils/apihooks";

export default function SignIn() {
  const { authData, setAuthData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [debug, setDebug] = useState();

  const signIn = async (e) => {
    e.preventDefault();
    console.log("sign in");
    const res = await fetch(`http://localhost:8000/api/users/${debug}/`)
    const user = await res.json()
    console.log(user)
    await localStorage.setItem(
      "authData",
      JSON.stringify({ jwt: "jwt", uid: debug, lid: [user.labratory] })
    );
    window.location.href = `/`;
    return;
  };
  return (
    <>
      <h2 className="title">サインイン</h2>
      <form>
        <div className="field">
          <label className="label">e-mail</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="example@shibaura-it.ac.jp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">debug</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder=""
              value={debug}
              onChange={(e) => setDebug(Number(e.target.value))}
            ></input>
          </div>
        </div>
        <button className="button is-primary" onClick={signIn}>
          サインイン
        </button>
      </form>
      <p>
        <a href="./password">パスワードを忘れた場合</a>
      </p>
    </>
  );
}
