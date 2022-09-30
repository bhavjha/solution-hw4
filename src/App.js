import React, { Component } from 'react';

import './App.css';

import Nav from './Nav.js'
import Roll from './Roll.js';


import Index from './views/home/Index.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollData: [
        {
          imageURL: "/assets/img/original-cinnamon-roll.jpg",
          rollName: "Original cinnamon roll",
          rollPrice: "$ 2.49"
        },
        {
          imageURL: "/assets/img/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollPrice: "$ 2.99",
  
        },
        {
          imageURL: "/assets/img/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/double-chocolate-cinnamon-roll.jpg",
          rollName: "Double Chocolate cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/strawberry-cinnamon-roll.jpg",
          rollName: "Strawberry  cinnamon roll",
          rollPrice: "$ 3.99"
        }
        
      ],
      selectedRollIndex: null,
      glazingType: "Keep Original",
      packSize: 1
    }
  }

  // editButtonHandler = (rollIndex) => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     selectedRollIndex: rollIndex,
  //     glazingType: this.state.rollData[rollIndex].rollGlazing,
  //     packSize: this.state.rollData[rollIndex].rollPackSize
  //   }))
  // };

  addToCart = () => {
    if (this.state.selectedRollIndex != null) {
      let newRollData = this.state.rollData
      newRollData[this.state.selectedRollIndex].glazingType = this.state.glazingType;
      newRollData[this.state.selectedRollIndex].packSize = this.state.packSize;
      this.setState(prevState => ({
        ...prevState,
        rollData: newRollData,
        glazingType: "",
        packSize: "",
        selectedRollIndex: null
      }))
    }
  }

 

  render() {
    return (
      <div className="App">
        <Nav />

          <div className="gallery">
              <div className="item-row">
                   <Roll
                      rollIndex={0}
                      imageURL={this.state.rollData[0].imageURL}
                      rollName={this.state.rollData[0].rollName}
                      rollPrice={this.state.rollData[0].rollPrice}
                      glazingType={this.state.rollData[0].glazingType} 
                      packSize={this.state.rollData[0].packSize}
                   />
                   <Roll
                      rollIndex={1}
                      imageURL={this.state.rollData[1].imageURL}
                      rollName={this.state.rollData[1].rollName}
                      rollPrice={this.state.rollData[1].rollPrice}
                      glazingType={this.state.rollData[1].glazingType} 
                      packSize={this.state.rollData[1].packSize} 
                   />
                   <Roll
                      rollIndex={2}
                      imageURL={this.state.rollData[2].imageURL}
                      rollName={this.state.rollData[2].rollName}
                      rollPrice={this.state.rollData[2].rollPrice}
                      glazingType={this.state.rollData[2].glazingType} 
                      packSize={this.state.rollData[2].packSize} 
                   />
                </div>
              <div className="item-row">
                   <Roll
                      rollIndex={3}
                      imageURL={this.state.rollData[3].imageURL}
                      rollName={this.state.rollData[3].rollName}
                      rollPrice={this.state.rollData[3].rollPrice}
                      glazingType={this.state.rollData[3].glazingType} 
                      packSize={this.state.rollData[3].packSize} 
                   />
                   <Roll
                      rollIndex={4}
                      imageURL={this.state.rollData[4].imageURL}
                      rollName={this.state.rollData[4].rollName}
                      rollPrice={this.state.rollData[4].rollPrice}
                      glazingType={this.state.rollData[4].glazingType} 
                      packSize={this.state.rollData[4].packSize} 
                   />
                   <Roll
                      rollIndex={5}
                      imageURL={this.state.rollData[5].imageURL}
                      rollName={this.state.rollData[5].rollName}
                      rollPrice={this.state.rollData[5].rollPrice}
                      glazingType={this.state.rollData[5].glazingType} 
                      packSize={this.state.rollData[5].packSize} 
                   />
                </div>
            </div>
      </div>
    );
  }
  
}

export default App;
