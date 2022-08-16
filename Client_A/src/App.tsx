import { Route, Routes } from "react-router-dom";
import Footer from "./app/components/Footer/Footer";
import Navbar from "./app/components/Navbar/Navbar";
import Details from "./app/containers/Details/Details";
import Home from "./app/containers/Home/Home";
import { socket } from "./app/graphql/index";
import { useAppSelector } from "./app/hooks";

function App() {
  socket.on("connect", () => {
    console.log(socket.connect);
  });
  const footer = useAppSelector((state): boolean => state.ui.footer);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
      {footer ? (
        <footer>
          <Footer />
        </footer>
      ) : null}
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
