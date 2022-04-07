import { AuthContext } from "../../utils/auth/Auth";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../../utils/apihooks";
import { tags } from '../../utils/url'

export default function Users() {
  const { authData } = useContext(AuthContext);
  const location = useLocation();
  const uid = location.pathname.split("/")[2];
  const user = useUser(uid);
  console.log(authData.uid, uid);
  if (!user) return <></>;
  else if (location.pathname.split("/")[2] === `${authData.uid}`)
    return (
      <div>
        <h2 className="title">ユーザ情報</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{uid}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{user.mail}</td>
            </tr>
            <tr>
              <th>ユーザ名</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>分野</th>
              <td>{tags[user.field]}</td>
            </tr>
          </tbody>
        </table>
        <a href={`./${authData.uid}/edit`}>
          <button className="button">編集</button>
        </a>
      </div>
    );
  else
    return (
      <div>
        <h2 className="title">ユーザ情報</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{uid}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{user.mail}</td>
            </tr>
            <tr>
              <th>ユーザ名</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>分野</th>
              <td>{tags[user.field]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
