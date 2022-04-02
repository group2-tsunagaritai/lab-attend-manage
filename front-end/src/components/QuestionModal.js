import { useState } from "react";
export default function QuestionModal(props) {
  const [input, setInput] = useState(""); // テキストボックスの入力値を保持する
  return (
    <div className="box relative question-modal">
      <button
        id="question-form-close-button"
        onClick={props.handleClose}
      >
        close
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // formイベントは通常画面遷移がおこるのでそれをブロックする
          props.handleSubmit(input); // propsから受け取ったhandleSubmit関数にinputの値を渡す
          setInput(""); // テキストボックスを空に戻す
        }}
      >
        <label>Please input question.</label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} // changeイベントが発火するたびに、inputの値を書き換える
          type="text"
          className="input"
        ></input>
        <button className="button is-primary">ask</button>
      </form>
    </div>
  );
}
