import { AuthContext } from "../../utils/auth/Auth";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Users() {
  const { authData } = useContext(AuthContext);
  const location = useLocation();
  console.log(authData.uid, location.pathname.split("/")[2]);
  if (location.pathname.split("/")[2] === authData.uid)
    return (
      <div>
        <h2 className="title">ユーザ情報</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{"aaaaaaa"}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{"aaaaaaa@aaaa.com"}</td>
            </tr>
            <tr>
              <th>ユーザ名</th>
              <td>{"aaaaaaa"}</td>
            </tr>
          </tbody>
        </table>
        <a href={`./${authData.uid}/edit`}>
          <button className="button">編集</button>
        </a>
      </div>
    );
  else return <div></div>;
}
