import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { Home } from "../pages/Home";
import { Media } from "../pages/Media";
import { TheGame } from "../pages/TheGame";
import { Download } from "../pages/Download";
import { Community } from "../pages/Community";
import bgHomePage from "../shared/assets/img/bgHomePage.png";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex justify-center">
          <Header />

          <main className="flex-1 flex justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/media" element={<Media />} />
              <Route path="/the_game" element={<TheGame />}></Route>
              <Route path="/download" element={<Download />}></Route>
              <Route path="/community" element={<Community />}></Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
