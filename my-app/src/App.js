import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <a className="navbar-brand" href="#"><i className="fas fa-stroopwafel"></i>&nbsp;WD2019</a>
            
            <section className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Channel</a>
                <a className="nav-item nav-link" href="#">Login</a>
              </div>
            </section>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
              aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          </nav>      
      </div>
    );
  }
}

export default App;
