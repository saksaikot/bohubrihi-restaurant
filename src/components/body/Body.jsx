import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";

export default function Body() {
  return (
    <div className="container">
      <Route path="/menu" exact render={() => <Menu />} />
      <Route path="/" exact render={() => <Home />} />

      <Route path="/about" exact render={() => <About />} />

      <Route path="/contact" exact render={() => <Contact />} />
    </div>
  );
}
