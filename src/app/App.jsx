import "./styles/index.css";
import { Header } from "../widgets/Header";
import { Home } from "../pages/Home";
import bgHomePage from "../shared/assets/img/bgHomePage.png";

function App() {
  return (
    <div
      className='I flex min-h-screen  bg-cover bg-center bg-no-repeat justify-center '
      style={{ backgroundImage: `url(${bgHomePage})` }}
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
