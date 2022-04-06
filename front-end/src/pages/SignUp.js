import { AuthContext } from "../utils/auth/Auth";
import { useContext, useState } from "react";

export default function SignUn() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [state, setState] = useState("input");
  const [error, setError] = useState([]);

  const validate = () => {
    return true;
  };
  const submit = ()=>{

    setState('complete');
  }

  if (state === "input")
    return (
      <>
        <h2 className="title">登録</h2>
        <h3>入力</h3>
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
            <label className="label">ユーザ名</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label">password 確認</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder=""
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className="button is-primary"
            onClick={(e) => {
              e.preventDefault();
              if (validate()) setState("confirm");
            }}
          >
            確認
          </button>
        </form>
      </>
    );
  else if (state === "confirm") {
    return (
      <>
        <h3>確認</h3>
        <label>メールアドレス</label>
        <p>{email}</p>
        <label>ユーザ名</label>
        <p>{username}</p>
        <button className="button is-primary" onClick={()=>submit()}>登録</button>
      </>
    );
  } else {
    return <div>入力されたメールアドレスに確認メールを送信しました。</div>;
  }
}
