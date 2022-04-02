export default function Index() {
  const routes = ["/", "/ask", "/counter", "/pikachu", "/dog"];
  return (
    <ul>
      {routes.map(
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
