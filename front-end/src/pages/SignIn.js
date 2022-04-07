import { AuthContext } from "../utils/auth/Auth";
import { useContext, useState } from "react";

export default function SignIn() {
  const { authData, setAuthData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async (e) => {
    e.preventDefault();
    console.log('sign in')
    await localStorage.setItem(
      "authData",
      JSON.stringify({ jwt: "jwt", uid: 1, lid: [2] })
    );
    window.location.href = `/`
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
