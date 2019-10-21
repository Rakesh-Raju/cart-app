import React, {Component} from 'react'

class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
          cartList: []
        }
      }

    componentDidMount() {
        fetch("localhost:5555/list").then(data => data.json()).then(data =>this.setState({cartList: data})).catch(console.log);
     }



render() {
   
return (
    <div className = "container">
        <div className = "col-xs-12">
        <h1>Your current cart: </h1>  
        {this.state.cartList.map(e =>
              <div>
                    [Product Name: {e.name}] [Description: {e.description}] [Cost: {e.price}] [Amount: {e.amount}]
               </div> 
              )}
        </div>
       
    </div>
);

}


}

export default Cart;