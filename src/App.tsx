import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Pages } from "./components/Pages";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center p-8 rounded-lg max-w-md mx-auto mt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/blog" element={<Pages/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
