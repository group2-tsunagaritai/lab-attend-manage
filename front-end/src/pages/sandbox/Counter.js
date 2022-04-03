import { useEffect, useState } from "react";

// コンポーネント
export default function Counter() {
  // 再描画されても状態（値）を保持する
  const [count, setCount] = useState(0);

  // 再描画されるたびに呼び出される
  console.log("再描画");

  // 初回だけ呼び出される
  useEffect(() => {
    console.log("初回のみ");
  }, []);
  // countが変わったときに呼び出されるEffect(副作用)
  useEffect(() => {
    console.log("countが変わるたびに呼ばれる");
  }, [count]);

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
