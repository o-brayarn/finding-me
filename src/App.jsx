import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  AboutUs,
  Blog,
  Contact,
  Events,
  History,
  Homepage,
  Join,
  Partner,
  Share,
  Team,
  Volunteer,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
        <Route path="/join" element={<Join />} />
        <Route path="/partner-with-us" element={<Partner />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/share-your-story" element={<Share />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
