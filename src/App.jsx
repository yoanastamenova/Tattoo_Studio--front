import "./index.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Body } from "./views/Body/Body.jsx";


function App() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }

export default App;

