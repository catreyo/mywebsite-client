import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Books from "./pages/Books";
import NoPage from "./pages/NoPage";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="shows" element={<Shows />} />
          <Route path="books" element={<Books />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
