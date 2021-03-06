import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../../utils/apihooks";
import { tags } from "../../utils/url"

export default function Edit() {
  const location = useLocation();
  const uid = location.pathname.split("/")[2];
  const user = useUser(uid);
  console.log(user);
  const emailRef = useRef();
  const usernameRef = useRef();
  const fieldRef = useRef();
  useEffect(() => {
    // 初期状態を取得
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (emailRef.current && usernameRef.current && fieldRef.current) {
      const formdata = new FormData();
      formdata.append('mail',emailRef.current.value)
      formdata.append('name',usernameRef.current.value)
      formdata.append('field',fieldRef.current.value)
      fetch(`http://localhost:8000/api/users/${uid}/`, {
        method: "PATCH",
        body: formdata,
      }).then(window.location.href = `/users/${uid}`);
    }
  };
  if (!user) return <></>;
  return (
    <div>
      <h2 className="title">ユーザ情報編集</h2>
      <form>
        <div className="field gap-4">
          <div className="control">
            <label className="label">E-mail</label>
            <input
              ref={emailRef}
              className="input"
              type="email"
              defaultValue={user.mail}
            ></input>
          </div>
          <div className="control">
            <label className="label">ユーザ名</label>
            <input
              ref={usernameRef}
              className="input"
              type="text"
              defaultValue={user.name}
            ></input>
          </div>
          <div className="control">
            <label className="label">分野</label>
            <select className="input" defaultValue={user.field} ref={fieldRef}>
              {[0,1,2,3,4].map((num)=>{
                return <option value={num}>{tags[num]}</option>
              })}
            </select>
          </div>
        </div>
        <button className="button is-primary" onClick={submit}>
          保存
        </button>
      </form>
    </div>
  );
}
