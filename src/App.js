import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header className="header" />
        <Dashboard />
        <Process />
        <Services />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
