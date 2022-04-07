import { useRef, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  useLaboratory,
  usePollingMembers,
  useUser,
} from "../../utils/apihooks";
import { AuthContext } from "../../utils/auth/Auth";

function Avatar({ spacewidth, member }) {
  const pos = { x: member.x, y: member.y };
  return (
    <>
      <div
        className="lab-avatar"
        style={{
          top: `${(pos.y * spacewidth) / 100}px`,
          left: `${(pos.x * spacewidth) / 100}px`,
        }}
      >
        <a href={`/users/${member.id}`}>
        {member.name}</a>
      </div>
    </>
  );
}

function DraggableAvatar({ spacewidth, member, uid }) {
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: member.x, y: member.y });
  console.log("shoki", pos, spacewidth);
  useEffect(() => {
    const formdata = new FormData();
    console.log(pos);
    formdata.append("x", pos.x);
    formdata.append("y", pos.y);
    if (isFinite(pos.x) && isFinite(pos.y))
      fetch(`http://localhost:8000/api/users/${uid}/`, {
        method: "PATCH",
        body: formdata,
      });
  }, [pos]);
  return (
    <>
      <div
        onDragStart={(e) => {
          setStart({ x: e.clientX, y: e.clientY });
        }}
        onDragEnd={(e) => {
          console.log(
            (100 * (e.clientX - start.x)) / spacewidth,
            (100 * (e.clientY - start.y)) / spacewidth
          );
          setPos({
            x: Math.max(
              0,
              Math.min(
                100,
                Math.round(pos.x + (100 * (e.clientX - start.x)) / spacewidth)
              )
            ),
            y: Math.max(
              0,
              Math.min(
                100,
                Math.round(pos.y + (100 * (e.clientY - start.y)) / spacewidth)
              )
            ),
          });
        }}
        draggable
        className="lab-avatar"
        style={{
          background: "whitesmoke",
          color:"black",
          top: `${(pos.y * spacewidth) / 100}px`,
          left: `${(pos.x * spacewidth) / 100}px`,
        }}
      >
        {member.name}
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

function SpaceWrapper({ members, user, attend }) {
  const [width, setWidth] = useState(0);
  const space = useRef();

  useEffect(() => {
    console.log("space.current");
    if (space.current)
      setTimeout(() => setWidth(space.current.clientWidth), 100);
  }, [space.current]);
  if (!user) return <></>;
  return (
    <Space refrelay={space}>
      {members
        .filter((member) => member.attend && member.id !== user.id)
        .map((member, index) => {
          console.log(member);
          return <Avatar key={index} spacewidth={width} member={member} />;
        })}
      {attend ? (
        <DraggableAvatar member={user} spacewidth={width} uid={user.id} />
      ) : (
        <></>
      )}
    </Space>
  );
}

export default function Detail() {
  const location = useLocation();
  const lid = location.pathname.split("/")[2];
  const laboratory = useLaboratory(lid);
  const members = usePollingMembers(lid);
  const { authData } = useContext(AuthContext);

  const user = useUser(authData.uid);
  console.log("authData", authData, user);
  const [userAttend, setUserAttend] = useState(false);
  useEffect(() => {
    if (user) setUserAttend(user.attend);
  }, [user]);
  const changeAttend = (next) => {
    const formdata = new FormData();
    formdata.append("attend", next);
    fetch(`http://localhost:8000/api/users/${authData.uid}/`, {
      method: "PATCH",
      body: formdata,
    }).then(() => {});
  };

  if (!(laboratory && members)) return <></>;
  return (
    <div>
      <h2 className="title">{laboratory["labratory_name"]}</h2>
      <div className="flex gap-4" style={{ marginBottom: "1rem" }}>
        {userAttend ? (
          <button
            className="button is-primary"
            onClick={() => {
              changeAttend(false);
              setUserAttend(false);
            }}
          >
            退席
          </button>
        ) : (
          <button
            className="button is-primary"
            onClick={() => {
              changeAttend(true);
              setUserAttend(true);
            }}
          >
            出席
          </button>
        )}
        <a href={`/laboratories/${lid}/edit`}>
          <button className="button">管理</button>
        </a>
        <a href={`/laboratories/${lid}/schedule`}>
          <button className="button">
            スケジュール確認
          </button>
        </a>
        <a href={`/laboratories/${lid}/schedule/new`}>
          <button className="button">
            スケジュール登録
          </button>
        </a>
      </div>
      <SpaceWrapper members={members} user={user} attend={userAttend} />
    </div>
  );
}
