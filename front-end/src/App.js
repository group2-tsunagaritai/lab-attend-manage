import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ui>
          <li>
            <a href="/">/</a>
          </li>
          <li>
            <a href="/counter">/counter</a>
          </li>
        </ui>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
