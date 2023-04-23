import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      
      <div className="container my-3">
        <TextFrom heading="Enter the text for analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
