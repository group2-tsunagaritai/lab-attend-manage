import dayjs from "dayjs";

function* range(start, end) {
  for (let i = start; i < end; i++) yield i;
}

function Panel({ opacity }) {
  return <div style={{ opacity: opacity }} className="attend-panel"></div>;
}

export default function Log() {
  const logs = [{}, {}, {}];
  const today = dayjs().startOf("week");
  const millionago = today.subtract(20, "week");
  console.log(millionago);
  console.log(today);
  return (
    <div>
      <h2 className="title">出席ログ確認</h2>
      <div className="box">
        <div className="flex">
          {[...range(0, 20)].map((w) => {
            return (
              <div className="flex-column">
                {[...range(0, 7)].map((w, d) => {
                  return <Panel key={`${w},${d}`} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
