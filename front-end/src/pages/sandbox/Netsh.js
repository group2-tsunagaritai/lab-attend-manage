import { useState } from "react";

export default function Netsh() {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  return (
    <div className="box m-4">
      <label>port</label>
      <input
        className="input"
        onChange={(e) => setPort(e.target.value)}
        type="text"
      ></input>
      <label>ip</label>
      <input
        className="input"
        onChange={(e) => setIp(e.target.value)}
        type="text"
      ></input>
      <label>command</label>
      <input
        readOnly
        type="text"
        className={"input"}
        value={`netsh interface portproxy add v4tov4 listenaddress=localhost listenport=${port} connectaddress=${ip} connectport=${port}`}
      ></input>
    </div>
  );
}
