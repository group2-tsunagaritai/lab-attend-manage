// APIを叩いて表示するだけ
import { useEffect, useState } from "react";
export default function Pikachu() {
  const [data, setData] = useState();
  console.log("data", data);
  // 最初だけAPIを叩く
  useEffect(() => {
      // 同じものを表示しても面白くないからランダムで
    const number = Math.floor(Math.random() * 904 + 1);
    const fetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
      setData(await res.json());
    };
    fetchData();
  }, []);
  // dataが初期値（undefined）のときはloading... と表示
  if (!data) return <div>loading...</div>;
  // dataに中身が入っていれば以下の要素を表示
  else
    return (
      <div className="m-4">
        <img
          style={{ imageRendering: "pixelated" }}
          width="192px"
          height="192px"
          src={data.sprites["front_default"]}
          alt={data.name}
        />
        <table className="table">
          <tbody>
            <tr>
              <td>id</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>height</td>
              <td>{data.height}</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>{data.weight}</td>
            </tr>
            <tr>
              <td>type</td>
              <td>{data.types.map((elm) => elm.type.name)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
