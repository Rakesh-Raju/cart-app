import React, {Component} from 'react';
class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {
                Name: " ",
                Description: " ",
                Price: " ",
                Amount:" "
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        
            this.setState({[evt.target.name]: evt.target.value});

        
    }

    postData(evt) {
        evt.preventDefault();

        let name = this.state.Name;
            if(name.length < 3){
            alert("Invalid Name!")
            return;
        }
        let desc = this.state.Description;
        if(!desc.length > 15){
            alert("Invalid Description!");
            return;
        }
        let price = this.state.Price;
        if(!price > 0){
            alert("Negative price specified!");
            return;
        }
        let amount = this.state.Amount;
        if(!amount > 0){
            window.alert("Invalid amount specified!");
            return;
        }

        fetch("localhost:5555/item/add", {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({Name:name, Description:desc, Price:price, Amount:amount})
        }).then(res => res.json()).catch(err => console.log(err))


    }

    render() {
        
        return (
                <div className = "Add">     
                <header className="Add-Header">
                <h1 className="App-title">Add Items</h1>
                </header>
                    <p className="Cart-Add">
                        <form onSubmit={this.handleSubmit}>
                            <label>Product Name:</label>
                            <input type ="text" name ="Name" onChange={this.handleChange}/>
                            <label>Description: </label>
                            <input type ="text" name ="Description" onChange={this.handleChange}/>
                            <label>Price: </label>
                            <input type ="text" name ="Price" onChange={this.handleChange}/>
                            <label>Amount: </label>
                            <input type ="text" name ="Amount" onChange={this.handleChange}/>
                            <input type="submit" value="Add to Cart"></input>
                        </form>
                    </p>
                    
                </div>
                   


        );
    }
}

export default AddItem;