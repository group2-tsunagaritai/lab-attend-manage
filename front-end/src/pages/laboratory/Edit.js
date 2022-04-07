function UserCard() {
  return (
    <div className="box">
      <div className="flex gap-4 space-between w-full">
        <div className="flex gap-4 align-center">
          <p>名前</p>
          <p>id</p>
        </div>
        <button className="button">
          削除
        </button>
      </div>
    </div>
  );
}
export default function Edit() {
  return (
    <div>
      <h2 className="title">研究室情報編集</h2>
      <div className="flex flex-column gap-4">
        <div className="flex gap-4">
          <input className="input" type="text" placeholder="ID"></input>
          <button className="is-primary button">追加</button>
        </div>
        <UserCard />
      </div>
    </div>
  );
}
