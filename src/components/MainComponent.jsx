import React, { Component } from 'react';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';


class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
