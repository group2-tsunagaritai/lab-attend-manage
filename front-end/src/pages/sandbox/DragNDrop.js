// ドラッグアンドドロップのお試し

import { useState } from "react";

// https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API
export default function DragNDrop() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState();

  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        position: "relative",
        background: "gray",
      }}
    >
      <div
        draggable
        className="box"
        onDragStart={(e) => {
          setStartPos({ x: e.clientX, y: e.clientY });
        }}
        onDragEnd={(e) => {
          console.log("始点終点:", startPos, "→", {
            x: e.clientX,
            y: e.clientY,
          });
          const tmp = {
            x: e.clientX - startPos.x + pos.x,
            y: e.clientY - startPos.y + pos.y,
          };
          setPos(tmp);
        }}
        style={{
          width: "10rem",
          textAlign: "center",
          position: "absolute",
          top: `${pos.y}px`,
          left: `${pos.x}px`,
        }}
      >
        draggable
      </div>
    </div>
  );
}
