import { useState, useEffect } from "react";
import { backend } from "../utils/url";
export default function LaboratoryCard(props) {
  const [data, setData] = useState();
  // TODO 入室人数 / 所属人数 みたいな表示を作る
  const fetchData = async () => {
    fetch(backend + `/laboratories/${props.lid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch.catch((e) => console.error(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="box">
      <a href={`/laboratories/${props.lid}`}>
        {data ? (
          <>
            <h3>{data.laboratoryName}</h3>
            <p>{}</p> 
          </>
        ) : (
          <h3>loading...</h3>
        )}
      </a>
    </div>
  );
}
