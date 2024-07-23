import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  function App() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default App;
