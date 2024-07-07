import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { Transitions } from "./components/Transitions/transitions";
import { SuspenseCat } from "./components/Suspense/suspenseCat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="transition" element={<Transitions />} />
          <Route path="suspense" element={<SuspenseCat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
