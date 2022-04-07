import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePollLaboratory } from "../../utils/apihooks";

function Avatar(props) {
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const laboratory = usePollLaboratory(3);
  return (
    <>
      <div
        onDragStart={(e) => {
          setStart({ x: e.clientX, y: e.clientY });
        }}
        onDragEnd={(e) => {
          console.log(
            (100 * (e.clientX - start.x)) / props.spacewidth,
            (100 * (e.clientY - start.y)) / props.spacewidth
          );
          setPos({
            x: pos.x + (100 * (e.clientX - start.x)) / props.spacewidth,
            y: pos.y + (100 * (e.clientY - start.y)) / props.spacewidth,
          });
        }}
        draggable
        className="lab-avatar"
        style={{
          top: `${(pos.y * props.spacewidth) / 100}px`,
          left: `${(pos.x * props.spacewidth) / 100}px`,
        }}
      >
        <img />
      </div>
    </>
  );
}

function Space(props) {
  return (
    <div ref={props.refrelay} className="lab-space">
      {props.children}
    </div>
  );
}

function SpaceWrapper(props) {
  const [width, setWidth] = useState(0);
  const space = useRef();
  useEffect(() => {
    if (space.current) setWidth(space.current.clientWidth);
  }, [space]);
  return (
    <Space refrelay={space}>
      <Avatar spacewidth={width} />
    </Space>
  );
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
      <SpaceWrapper />
    </div>
  );
}
