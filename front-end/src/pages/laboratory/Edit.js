import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUsers } from "../../utils/apihooks";

function UserCard({ user }) {
  return (
    <div className="box">
      <div className="flex gap-4 space-between w-full">
        <div className="flex gap-4 align-center">
          <p>{user.name}</p>
        </div>
        {/* <button
          className="button"
          onClick={() => {
            const formdata = new FormData();
            formdata.append("labratory", -1);
            fetch(`http://localhost:8000/api/users/${user.id}/`, {
              method: "PATCH",
              body: formdata,
            });
          }}
        >
          削除
        </button> */}
      </div>
    </div>
  );
}
export default function Edit() {
  const location = useLocation();
  const lid = location.pathname.split("/")[2];
  const [newid, setNewId] = useState("");
  const users = useUsers(lid);
  console.log(lid);
  console.log("users", users);

  return (
    <div>
      <h2 className="title">研究室情報編集</h2>
      <div className="flex flex-column gap-4">
        <div className="flex gap-4">
          <input
            className="input"
            type="text"
            placeholder="ID"
            value={newid}
            onChange={(e) => setNewId(e.target.value)}
          ></input>
          <button
            className="is-primary button"
            onClick={() => {
              const formdata = new FormData();
              formdata.append("labratory", Number(lid));
              fetch(`http://localhost:8000/api/users/${newid}/`, {
                method: "PATCH",
                body: formdata,
              }).then(() => {
                console.log("add");
              });
            }}
          >
            追加
          </button>
        </div>
        {users.map((user, key) => (
          <UserCard key={key} user={user} />
        ))}
      </div>
    </div>
  );
}
