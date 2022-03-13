import React, {useState, useContext, useRef, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons'

function AddTransaction() {
    const {addTransaction,tools,closeModal} = useContext(GlobalContext);


    const titleInput = useRef(null);
    const categoryInput = useRef(null);
    const amountInput = useRef(null)
    
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [visible,setVisible] = useState(false);
    
    function close() { 
        closeModal({
            type: tools[0].type
        })
    }

    function getTransaction(e) {
        e.preventDefault();
        
        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            text: titleInput.current.value,
            amount: parseInt(amountInput.current.value),
            date: new Date(),
            filtered: true,
            category: categoryInput.current.value
        })
        closeModal({
            type: tools[0].type
        })
    }

    return(
        <div className={tools[0].showModal ? 'overlay modal' : 'overlay none'}>
            <div className={tools[0].showModal ? 'visible modal-add' : 'hidden modal-add'}>
                <div className="modal-content">
                <FontAwesomeIcon icon={faClose} onClick={close} className="close-icon"></FontAwesomeIcon>
                <h3 className="modal-title">Add transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">Title</label>
                        <input ref={titleInput} name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Category</label>
                        <input ref={categoryInput} name="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
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
            </div>
        </div>
    );
}

export default AddTransaction;
