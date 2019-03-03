import React, { Component } from 'react';
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import simpsons from "./components/simpsons.json";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.simpsons to the friends json array
  state = {
    simpsons
  };

  // Shuffle all cards when one card is clicked
  shuffleSimps = simpsons => {
    console.log(simpsons)
    let i = simpsons.length -1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random()* (i+1));
      return j
    }
    // return simpsons;
    // return j
  }
  

  render() {
    return (
      <div>
        <Nav />
        <Header />
        {this.state.simpsons.map(simpsons =>(
          <Main 
          shuffleSimps={this.shuffleSimps}
          id={simpsons.id}
          key={simpsons.id}
          image={simpsons.image}
          />
        ))}
        
        
        <Footer />
      </div>
    );
  }
}

export default App;
