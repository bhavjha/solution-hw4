import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {
  render() {
    return(
        <div className="navcontainer"> 

        <div className="logo">
          <img className="logo-thumbnail" src={process.env.PUBLIC_URL + '/assets/img/logo-01.svg'} alt="Logo icon"/>
        </div>

        <div className="nav">
          <div className="pages">
            <p className="nav-items">PRODUCTS</p>
            <p className="nav-items">CART</p>
          </div>


        <div class="cart-summary">
          <p id="cart-summary-items" class="cart-summary-items">0 items</p>
          <p id="cart-summary-items-total" class="cart-summary-items">Total: $0.00</p>
        </div>

        <div class="popup">
          <span class="popuptext" id="popupSummary"><p>Added to cart:</p><p class="summaryOfRoll"></p>
          </span>
        </div>

          <div>
            <hr/>
          </div>

          <div className="phrase">
            <p>
                Our hand-made cinnamon rolls
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Nav;