import { AuthContext } from "../../utils/auth/Auth";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Users() {
  const auth = useContext(AuthContext);
  const location = useLocation();
  if (location.pathname.split("/")[2] == auth.uid)
    return (
      <div>
        <h2 className="title">ユーザ情報</h2>
        <div className="grid">
          <div >
            <h3>ID</h3>
            <p>{"aaaaaaaa"}</p>
          </div>
          <div >
            <h3>ユーザ名</h3>
            <p>{"aaaaaaaa"}</p>
          </div>
          <div >
            <h3>E-mail</h3>
            <p>{"aaaaaaaa"}</p>
          </div>
          <div >
            <h3>ユーザ名</h3>
            <p>{"aaaaaaaa"}</p>
          </div>
          <a href={`./${auth.uid}/edit`}><button className="button">編集</button></a>
        </div>
      </div>
    );
  else return <div></div>;
}
