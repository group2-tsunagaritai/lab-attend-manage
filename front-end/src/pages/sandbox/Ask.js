// Let's Ask再現ページ
import { useState } from "react";
import AskHeader from "../../components/AskHeader";
import QuestionModal from "../../components/QuestionModal";
export default function Ask() {
  const [questions, setQuestion] = useState([]); // 表示する質問と答えの一覧
  const [showModal, setShowModal] = useState(false); // モーダルを表示するかどうか

  // モーダルで質問が提出されたときの処理
  const handleSubmit = async function (question) {
    setShowModal(false);
    // Yes/No のAPIを叩く
    const result = await fetch("https://yesno.wtf/api");
    const resultData = await result.json();
    // 表示する質問一覧を書き換える
    // ※useState()で作った値は必ずsetXXXで上書きする
    // "..." はスプレッド構文 (https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    setQuestion([
      ...questions,
      { question: question, answer: resultData.answer },
    ]);
  };
  return (
    <>
      <AskHeader />
      <div className="section">
        <div className="ask-modal-button">
          <h3 className="">let's ask</h3>
          <button
            className="button is-primary is-rounded"
            onClick={() => setShowModal(true)} // アロー関数式 (引数)=>返り値 で関数が書ける
          >
            ask
          </button>
        </div>
        <table className="table ask-table">
          <thead>
            <tr>
              <th>質問</th>
              <th>結果</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(
              (
                elm,
                index // Arrayオブジェクトのメソッド。そういうものだと暗記しても良い。
              ) => (
                <tr key={index}>
                  <td>{elm.question}</td>
                  <td>{elm.answer}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {showModal ? ( // 三項演算子 (条件式 ? 'Trueの値' : 'falseの値')
          <QuestionModal
            handleSubmit={handleSubmit}
            handleClose={() => setShowModal(false)}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
