import { useState } from "react";
export default function New() {
  const [laboratoryName, setLaboratoryName] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    console.log(laboratoryName)
  }
  return (
    <div>
      <h2 className="title">研究室作成</h2>
      <h3>入力</h3>
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
        <button onClick={submit} className="button is-primary">作成</button>
      </form>
    </div>
  );
}
