import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><i className="fas fa-stroopwafel"></i>&nbsp;WD2019</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
              aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <section className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav ml-auto pr-3">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Channel</a>
                <a className="nav-item nav-link" href="#">Login</a>
              </div>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control mr-3" placeholder="Username"/>  
                </div>
                <button className="btn btn-outline-success">Login</button>
              </form>
            </section>        
          </nav>

          <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
            <container className="container col-6 col-md-2 d-flex justify-content-around">  
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-google-plus-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter-square"></i>
            </container>  
          </footer>      
      </div>
    );
  }
}

export default App;
