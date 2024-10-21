import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Trips from './pages/Trips.tsx';
import Setups from './pages/Setups.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Days from './pages/Days.tsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>} />
            <Route path="trips" element={<Trips/>} />
            <Route path="setups" element={<Setups/>} />
            <Route path="days" element={<Days/>} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
