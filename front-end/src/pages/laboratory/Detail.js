import { useLocation } from "react-router-dom";

function Avatar(props) {
  return (
    <>
      <div draggable className="lab-avatar">
        <img />
      </div>
    </>
  );
}

function Space(props) {
  return <div className="lab-space">{props.children}</div>;
}

export default function Detail() {
  const location = useLocation();
  const lid = location.pathname.split("/")[2];
  return (
    <div>
      <h2 className="title">研究室状況</h2>
      <button className="button is-primary">出席</button>
      <a href={`/laboratories/${lid}/edit`}>
        <button className="button">管理</button>
      </a>
      <a href={`/laboratories/${lid}/schedule`}>
        <button className="button">スケジュール確認</button>
      </a>
      <a href={`/laboratories/${lid}/schedule/new`}>
        <button className="button">スケジュール登録</button>
      </a>
      <Space>
        <Avatar />
      </Space>
    </div>
  );
}
