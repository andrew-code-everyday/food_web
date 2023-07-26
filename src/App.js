import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}