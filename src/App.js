import React, { Component } from 'react';

import './App.css';

import Nav from './Nav.js'
import Roll from './Roll.js';


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
      packSize: 1,
      cartArray : []

    }
  }


      
 popUpSummary = (name,glaze,pack,price) => {
  let popup = document.getElementById("popupSummary");
  popup.innerHTML = "<b>" +name + "</b>" + "</br>" + glaze + "<br/>" + "Pack of " + pack + "<br/>Price: " + price;
  popup.classList.toggle("show");
}

 popUpHide = () => {
  let popup = document.getElementById("popupSummary");
  popup.style.display='none';
}


  addToCart = ( name, glaze, pack, price) => {

    const rollobj = 
    {
      rollname: name,
      rollglaze: glaze,
      rollpack: pack,
      rollprice: price
    }
      //add to array 
      console.log('cartArray',this.state.cartArray);
      
      //call popup with the new object - loop over objects to get total price
      this.popUpSummary(name, glaze, pack, price);
      setTimeout(this.popUpHide,3000);

  
      //Update cart total and number of items
      let cartSummaryItems = document.getElementById("cart-summary-items");
      let cartSummaryItemsTotal = document.getElementById("cart-summary-items-total");

      let cartTotal = 0.00;
      let cartItems = 0;

      this.state.cartArray.map(cartItem => {
        let totalprice = (cartItem.rollprice).slice(2); 
        cartTotal += parseFloat(totalprice); 
        cartItems +=1;
      });

      cartSummaryItems.innerText = cartItems +" items";
      cartSummaryItemsTotal.innerText = "Total: $" + cartTotal;

      //set displayed price to baseprice
      // let base = document.getElementById("baseprice");
      // base.innerText = "$ " + baseprice;

      this.setState(prevState => ({
        ...prevState,
        //rollData: newRollData,
        cartArray: [...this.state.cartArray, rollobj],
        glazingType: "",
        packSize: "",
        selectedRollIndex: null,
      }))
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
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={1}
                      imageURL={this.state.rollData[1].imageURL}
                      rollName={this.state.rollData[1].rollName}
                      rollPrice={this.state.rollData[1].rollPrice}
                      glazingType={this.state.rollData[1].glazingType} 
                      packSize={this.state.rollData[1].packSize} 
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={2}
                      imageURL={this.state.rollData[2].imageURL}
                      rollName={this.state.rollData[2].rollName}
                      rollPrice={this.state.rollData[2].rollPrice}
                      glazingType={this.state.rollData[2].glazingType} 
                      packSize={this.state.rollData[2].packSize} 
                      onAdd={this.addToCart}
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
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={4}
                      imageURL={this.state.rollData[4].imageURL}
                      rollName={this.state.rollData[4].rollName}
                      rollPrice={this.state.rollData[4].rollPrice}
                      glazingType={this.state.rollData[4].glazingType} 
                      packSize={this.state.rollData[4].packSize} 
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={5}
                      imageURL={this.state.rollData[5].imageURL}
                      rollName={this.state.rollData[5].rollName}
                      rollPrice={this.state.rollData[5].rollPrice}
                      glazingType={this.state.rollData[5].glazingType} 
                      packSize={this.state.rollData[5].packSize} 
                      onAdd={this.addToCart}
                   />
                </div>
            </div>
      </div>
    );
  }
  
}

export default App;
