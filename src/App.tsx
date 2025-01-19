import "./style/main.scss";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./utils/constant";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.CONTACT} element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
