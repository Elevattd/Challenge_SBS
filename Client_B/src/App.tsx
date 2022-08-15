import { Route, Routes } from "react-router-dom";
import Footer from "./app/components/Footer/Footer";
import Navbar from "./app/components/Navbar/Navbar";
import Home from "./app/containers/Home/Home";
import { socket } from "./app/graphql/index";

function App() {
  socket.on("connect", () => {
    console.log("Socket connected");
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
