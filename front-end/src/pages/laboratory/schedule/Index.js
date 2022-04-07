import { useLocation } from "react-router-dom";
import { useLabSchedules, useUser } from "../../../utils/apihooks";
import dayjs from "dayjs";

function ScheduleCard({ schedule }) {
  const user = useUser(schedule.userid);
  console.log(user);
  if (!user) return <></>;
  return (
    <div className="box">
      <p>
        <span>{dayjs(schedule.enter).format("MM/DD HH:mm")}</span>
        <span>{` ～ `}</span>
        <span>{dayjs(schedule.enter).format("HH:mm")}</span>
      </p>
      <p>{user.name}</p>
    </div>
  );
}

export default function Schedule() {
  const location = useLocation();
  const lid = location.pathname.split("/")[2];
  const schedules = useLabSchedules(lid);
  console.log(schedules);
  return (
    <div>
      <h2 title="title">スケジュール確認</h2>
      <div>
        {schedules.map((schedule) => {
          return <ScheduleCard schedule={schedule} />;
        })}
      </div>
    </div>
  );
}
