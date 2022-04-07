import { useContext, useState } from "react";
import { AuthContext } from "../../utils/auth/Auth";
export default function New() {
  const [laboratoryName, setLaboratoryName] = useState("");
  const { authData } = useContext(AuthContext);
  console.log(authData);
  const submit = (e) => {
    e.preventDefault();
    console.log(laboratoryName);
    const formdata = new FormData();
    formdata.append("labratory_name", laboratoryName);
    formdata.append("member", authData.uid);
    console.log(formdata);
    fetch(`http://localhost:8000/api/labratory/`, {
      method: "POST",
      body: formdata,
    }).then((e)=>{window.location.href='/laboratories'}).catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="title is-3">研究室作成</h2>
      <h3 className="title is-4">入力</h3>
      <form>
        <div className="field">
          <label className="label">研究室名</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="cdlab"
              value={laboratoryName}
              onChange={(e) => setLaboratoryName(e.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={submit} className="button is-primary">
          作成
        </button>
      </form>
    </div>
  );
}
