export default function Index(props) {
  console.log(props.hrefs);
  return (
    <ul>
      {props.hrefs.map(
        (
          str // Arrayオブジェクトのmapメソッド https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        ) => (
          <li key={str}>
            <a href={str}>{str}</a>
          </li>
        )
      )}
    </ul>
  );
}
