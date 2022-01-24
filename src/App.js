import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <div className="overall">
        <Home />

        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
