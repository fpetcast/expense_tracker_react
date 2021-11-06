import React, {useState} from "react";

class AddTransaction extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text : '',
            amount : 0,
        }
        ;
    }
      
    render() {
        return(
            <div className="add-transaction">
                <h3>Add new transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" value={this.state.text} onChange={(e) => this.setState({text : e.target.value})} placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount" value={this.state.amount} onChange={(e) => this.setState({amount : e.target.value})}
                            >Amount <br />
                            (negative - expense, positive - income)</label
                        >
                        <input type="number" placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        );
    }
}

export default AddTransaction;
