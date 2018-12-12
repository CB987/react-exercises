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
import OneDog from './OneDog';

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
        "Milla": [
          "cookies",
          "pants",
        ],
        "Bijou": [
          "the dog",
          "hobbits",
        ],
        "Hermione": [
          "being a dog",
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
      dogs: {
        "Tilly": {
          "owner": "Jodi",
          "toys": [
            "people sleeping",
            "poop"
          ]
        },
        "Judge": {
          "owner": "Clare",
          "toys": [
            "food",
            "the back of my eyelids"
          ]
        },
        "Bernie": {
          "owner": "Jodi",
          "toys": [
            "farts",
            "snoring"
          ]
        },
        "Gracie": {
          "owner": "Jamie",
          "toys": [
            "my psychotic attitude",
            "running away"
          ]
        }
      }
    }
  }
  render() {
    // const dogName = 'Judge';
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
          {/* <Route path="/doggos" component={Dogs} /> */}
          <Route path="/doggos" render={(props) => {
            return <Dogs dogList={Object.keys(this.state.dogs)} {...props} />
          }} />
          {/* <Route path="/doggos/:dogName" component={OneDog} /> */}
          <Route path="/doggos/:dogName" render={(props) => {
            return (<OneDog dogInfo={this.state.dogs} {...props} />);
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
