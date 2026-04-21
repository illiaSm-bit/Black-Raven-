import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { Header } from "../widgets/Header";
import { Home } from "../pages/Home";
import { Media } from "../pages/Media";
import { TheGame } from "../pages/TheGame";
import { Download } from "../pages/Download";
import { Community } from "../pages/Community";
import bgHomePage from "../shared/assets/img/bgHomePage.png";

function App() {
  return (
    <BrowserRouter>
      <div
        className='I flex min-h-screen  bg-cover bg-center bg-no-repeat justify-center '
        style={{ backgroundImage: `url(${bgHomePage})` }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/media' element={<Media />} />
          <Route path='/the_game' element={<TheGame />}></Route>
          <Route path='/download' element={<Download />}></Route>
          <Route path='/community' element={<Community />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
