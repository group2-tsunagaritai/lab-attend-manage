import { AuthContext } from "../../utils/auth/Auth";
import { useContext } from "react";
import LaboratoryCard from "../../components/LaboratoryCard";

export default function Laboratory() {
  const { authData, setAuthData } = useContext(AuthContext);
  if (authData.jwt === "")
    return (
      <div>
        <a href="signin">ログイン</a>してください
      </div>
    );
  return (
    <div>
      <div className="flex space-between">
        <h2 className="title">所属研究室一覧</h2>
        <a href="/laboratories/new">
          <button className="button">研究室を作成する</button>
        </a>
      </div>
      {authData.lid.map((e) => (
        <LaboratoryCard key={e} lid={e} />
      ))}
    </div>
  );
}
