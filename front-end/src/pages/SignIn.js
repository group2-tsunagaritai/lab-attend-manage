import { AuthContext } from "../utils/auth/Auth";
import { useContext } from "react";

export default function SignIn() {
  const auth = useContext(AuthContext);
  return (
    <>
      <h2 className="title">サインイン</h2>
      <form>
        <div className="field">
          <label className="label">e-mail</label>
          <div class="control">
            <input
              className="input"
              type="email"
              placeholder="@shibaura-it.ac.jp"
            ></input>
          </div>
        </div>
        <div className="field">
          <label className="label">password</label>
          <div class="control">
            <input
              className="input"
              type="password"
              placeholder="@shibaura-it.ac.jp"
            ></input>
          </div>
        </div>
        <button className="button is-primary">サインイン</button>
      </form>
      <p>
        <a href="./password">パスワードを忘れた場合</a>
      </p>
    </>
  );
}
