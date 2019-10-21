import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import Main from './Main';



class App extends Component{
  
  render() {
    return (
      <div>
      <div className = "container">
        <div className = "col-xs-12">
          <h1>Welcome to Shop-R-US</h1>
          <Main/>
          <Link to= "./Cart.js">
          <button variant='outlined' type="button">
          View Cart
          </button> 
          </Link>
          <Link to='./AddItem.js'>
          <button variant='outlined' type="button">
          Add Item
          </button> 
          </Link>
         
      
        </div>
      </div>
      </div>
    
    );
  }
  
}

export default withRouter(App);
