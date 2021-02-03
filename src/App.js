import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/pages/Homepage/Homepage";
import Home from './components/pages/Homepage/Home';
import Navbar from "./components/Navbar";
//import Page from './components/pages/page/Page';
//import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Homepage /> */}
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
 