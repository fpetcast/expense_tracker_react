import React, {useState, useContext, useRef} from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext);

    const titleInput = useRef(null);
    const amountInput = useRef(null)
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    function getTransaction(e) {
        e.preventDefault();
        
        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            text: titleInput.current.value,
            amount: parseInt(amountInput.current.value),
            date: new Date(),
            filtered: true
        })
    }

    return(
        <div className="add-transaction">
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input ref={titleInput} name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input ref={amountInput} name="amount "type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={getTransaction}>Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
