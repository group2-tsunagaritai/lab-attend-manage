// 表示するページを決める所。
// 全ページで表示されるコンポーネントもここに置く
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "bulma/css/bulma.css";
import Ask from "./pages/sandbox/Ask";
import Counter from "./pages/sandbox/Counter";
import Home from "./pages/sandbox/Index";
import Pikachu from "./pages/sandbox/Pikachu";
import Dog from "./pages/sandbox/Dog";
import DragNDrop from "./pages/sandbox/DragNDrop";
import Users from "./pages/users/Index";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserEdit from "./pages/users/Edit";
import UserLog from "./pages/users/Log";
import Laboratory from "./pages/laboratory/Index";
import LaboratoryEdit from "./pages/laboratory/Edit";
import LaboratoryNew from "./pages/laboratory/New";
import ScheduleNew from "./pages/laboratory/schedule/New";
import Schedule from "./pages/laboratory/schedule/Index";
import Netsh from "./pages/sandbox/Netsh";
import Top from "./pages/Top";
import { AuthContext } from "./utils/auth/Auth";
import Detail from "./pages/laboratory/Detail";

function App() {
  const [authData, setAuthData] = useState({jwt:'',uid:''});

  useEffect(()=>{
    // localStorageに認証情報がある場合はContextProviderに渡す
    if(authData.jwt==""){
      const tmp = localStorage.getItem('authData')
      if(tmp){
        setAuthData(JSON.parse(tmp))
      }
    }
  },[])

  return (
    <div className="App">
      <AuthContext.Provider value={{ authData: authData, setAuthData: setAuthData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Top />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="users" element={<Outlet />}>
                <Route path=":userId" element={<Users />} />
                <Route path=":userId/edit" element={<UserEdit />} />
                <Route path=":userId/log" element={<UserLog />} />
              </Route>
              <Route path="laboratories" element={<Outlet />}>
                <Route index element={<Laboratory />} />
                <Route path=":labId" element={<Detail />} />
                <Route path=":labId/edit" element={<LaboratoryEdit />} />
                <Route path="new" element={<LaboratoryNew />} />
                <Route path=":labId/schedule" element={<Outlet />}>
                  <Route index element={<Schedule />} />
                  <Route path="new" element={<ScheduleNew />} />
                </Route>
              </Route>
            </Route>
            <Route path="sandbox" element={<Home />}>
              <Route path="counter" element={<Counter />} />
              <Route path="ask" element={<Ask />} />
              <Route path="pikachu" element={<Pikachu />} />
              <Route path="dog" element={<Dog />} />
              <Route path="dragndrop" element={<DragNDrop />} />
              <Route path="netsh" element={<Netsh />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
