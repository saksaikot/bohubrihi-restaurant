import React from "react";
import { Route, withRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ContactRedux from "./ContactRedux";
import Home from "./Home";
import Menu from "./Menu";

function Body(props) {
  React.useEffect(() => {
    document.title = props.location.pathname;
  });
  return (
    <div className="container">
      <Route path="/menu" exact render={() => <Menu />} title="Menu page" />
      <Route path="/" exact render={() => <Home />} />

      <Route path="/about" exact render={() => <About />} title="About page" />

      <Route
        path="/contact"
        exact
        render={() => <Contact />}
        title="Menu page"
      />
      <Route
        path="/contact-redux"
        exact
        render={() => <ContactRedux />}
        title="Menu page"
      />
    </div>
  );
}

export default withRouter(Body);
