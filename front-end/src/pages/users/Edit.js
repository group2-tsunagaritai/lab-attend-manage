import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../utils/auth/Auth";

export default function Edit() {
  const { authData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tags, setTag] = useState([]);
  useEffect(() => {
    // 初期状態を取得
  }, []);
  const submit = ()=>{
    console.log({email:email,username:username,tags:tags})
    console.log('submit',authData.jwt)
  }
  return (
    <div>
      <h2 className="title">ユーザ情報編集</h2>
      <div className="field gap-4">
        <div className="control">
          <label className="label">E-mail</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="control">
          <label className="label">ユーザ名</label>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="control">
          <label className="label">タグ</label>
          <input
            className="input"
            type="text"
            value={tags.join(", ")}
            onChange={(e) => {
              if (e.target.value[e.target.value.length - 1] === ",") {
                setTag([...tags, ""]);
              } else {
                const val = e.target.value
                  .replaceAll(" ", "")
                  .split(",")
                  .filter((e) => e !== "");
                setTag(val);
              }
            }}
          ></input>
        </div>
      </div>
      <button className="button is-primary" onClick={submit}>保存</button>
    </div>
  );
}
