import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
