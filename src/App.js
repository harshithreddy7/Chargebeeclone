import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Homepage/Home';
import Navbar from "./components/Navbar";

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
 