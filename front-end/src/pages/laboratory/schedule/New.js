import dayjs from "dayjs";

function ScheduleCard() {
  return (
    <div className="flex align-center p-2 gap-4">
      <p>2022/12/31 10:00 - 2022/12/31 17:00</p>
      <button className="button">削除</button>
    </div>
  );
}

export default function New() {
  const now = dayjs();
  console.log(now.format());
  return (
    <div>
      <h2 className="title">スケジュール登録</h2>
      <div className="p-4 flex gap-4 flex-column schedule-form">
        <div className="flex gap-4 align-center">
          <label className="label" style={{ width: "10rem" }}>
            入室予定
          </label>
          <input type="date" className="input"></input>
          <input type="time" className="input"></input>
        </div>
        <div className="flex gap-4 align-center">
          <label className="label" style={{ width: "10rem" }}>
            退室予定
          </label>
          <input type="date" className="input"></input>
          <input type="time" className="input"></input>
        </div>
        <button className="button is-primary">登録</button>
      </div>
      <div className="flex flex-column align-center">
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  );
}
