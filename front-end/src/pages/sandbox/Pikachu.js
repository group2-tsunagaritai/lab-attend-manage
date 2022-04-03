// APIを叩いて表示するだけ
import { useEffect, useState } from "react";

export default function Pikachu() {
  const [data, setData] = useState();
  console.log("data", data);
  // 最初だけAPIを叩く
  const setPokemon = async (number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    setData(await res.json());
  };
  useEffect(() => {
    // 同じものを表示しても面白くないからランダムで
    const number = Math.floor(Math.random() * 904 + 1);
    setPokemon(number);
  }, []);
  // dataが初期値（undefined）のときはloading... と表示
  if (!data) return <div>loading...</div>;
  // dataに中身が入っていれば以下の要素を表示
  else
    return (
      <>
        <button
          onClick={() => {
            setData(null)
            const number = Math.floor(Math.random() * 904 + 1);
            setPokemon(number);
          }}
          className="m-4 button"
        >
          reload
        </button>
        <div className="box m-4" style={{ width: "fit-content" }}>
          <img
            style={{ imageRendering: "pixelated" }}
            width="192px"
            height="192px"
            src={data.sprites["front_default"]}
            alt={data.name}
          />
          <table className="table m-auto">
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
      </>
    );
}
