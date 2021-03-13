import React, { Component } from 'react';

import Header from '../parts/Header';
import Body from '../parts/Body';
import Footer from '../parts/Footer';


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
