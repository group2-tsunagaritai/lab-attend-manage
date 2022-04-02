// 表示するページを決める所。
// 全ページで表示されるコンポーネントもここに置く
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import Ask from "./pages/Ask";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Index from "./components/Index";
import Pikachu from "./pages/Pikachu";
import Game from "./pages/Game";
function App() {
  return (
    <div className="App">
      <Index />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/pikachu" element={<Pikachu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
