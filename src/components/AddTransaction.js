import React from "react";

class AddTransaction extends React.Component {
    render() {
        return(
            <div className="add-transaction">
                <h3>Add new transaction</h3>
                <form>
                    <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount"
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
