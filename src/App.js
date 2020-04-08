import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Specalities from "./Components/Specalities";
import { Achievements } from "./Components/Achievements";
import { Blog } from "./Components/Blog";
import { Team } from "./Components/Team";
import { Contact } from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <Navigation /> */}
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Product} />
          <Route path="/specalities" component={Specalities} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/blog" component={Blog} />
          <Route path="/ourteam" component={Team} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

      {/* <Home />
      <Specalities />
      <Achievements />
      <Blog />
      <Team />
      <Contact /> */}
    </div>
  );
}

export default App;
