import { useLocation } from "react-router-dom";

export default function Detail() {
    const location = useLocation()
    const lid = location.pathname.split('/')[2]
  return (
    <div>
      <h2 className="title">研究室状況</h2>
      <button className="button is-primary">出席</button>
      <a href={`/laboratories/${lid}/schedule`}><button className="button">スケジュール確認</button></a>
      <a href={`/laboratories/${lid}/schedule/new`}><button className="button">スケジュール登録</button></a>
    </div>
  );
}
