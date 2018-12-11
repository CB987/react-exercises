import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, //watches for changes to url
  Route, //renders components based on the specific url
  //Link //changes the url so that the Router sees it
} from 'react-router-dom';


import Home from './Home';
import About from './About';
import Cats from './Cats';
import NavBar from './NavBar';
import OneCat from './OneCat';
import Dogs from './Dogs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // catList: [
      //   'Oakley',
      //   'Milla',
      //   'Bijou',
      //   'Hermione',
      //   'Gray'
      // ]
      catToys: {
        "Oakley": [
          'string',
          'popcorn',
        ],
        "Bijou": [
          "the dog",
          "hobbits",
        ],
        "Milla": [
          "cookies",
          "pants",
        ],
        "Hermione": [
          "carcasses",
          "world domination",
          "being the boss of you"
        ],
        "Gray": [
          "food",
          "snacks",
          "human food",
          "peeing in your bed",
        ]
      },
      dogToys: {
        Tilly: [
          "people sleeping",
          "poop"
        ],
        Judge: [
          "food",
          "the back of my eyelids"
        ],
        Bernie: [
          "farts",
          "snoring"
        ]
      }
    }
  }
  render() {
    const dogName = 'Judge';
    // console.log(this.state.dogToys.dogName);
    // console.log(this.state.dogToys[`${dogName}`]);
    // console.log(this.state.dogToys[dogName]);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/catters" render={(props) => {
            return <Cats catList={Object.keys(this.state.catToys)} {...props} />
          }} />
          <Route path="/catters/:catName" render={(props) => {
            return <OneCat toys={this.state.catToys} {...props} />
          }} />
          <Route path="/doggos" component={Dogs} />

        </div>
      </Router>
    );
  }
}

export default App;
