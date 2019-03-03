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

  


  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Main 
        id={simpsons[0].id}
        image={simpsons[0].image}
        />
        <Main 
        id={simpsons[1].id}
        image={simpsons[1].image}
        />
        <Main 
        id={simpsons[2].id}
        image={simpsons[2].image}
        />
        <Main 
        id={simpsons[3].id}
        image={simpsons[3].image}
        />
        <Main 
        id={simpsons[4].id}
        image={simpsons[4].image}
        />
        <Main 
        id={simpsons[5].id}
        image={simpsons[5].image}
        />
        <Main 
        id={simpsons[6].id}
        image={simpsons[6].image}
        />
        <Main 
        id={simpsons[7].id}
        image={simpsons[7].image}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
