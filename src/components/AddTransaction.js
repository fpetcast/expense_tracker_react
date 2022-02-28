import React, {useState} from "react";

function AddTransaction() {
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
      
    return(
        <div className="add-transaction">
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" value={amount} onChange={(e) => setAmount(e.target.value)}
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

export default AddTransaction;
