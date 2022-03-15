import React, {useState, useContext, useRef, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons'

function AddTransaction() {
    const {addTransaction,tools,closeModal, categories} = useContext(GlobalContext);

    const cats = categories.map((cat,index) => 
    <option key={index}>
        {cat.name}
    </option>);

    const titleInput = useRef(null);
    // const categoryInput = useRef(null);
    const amountInput = useRef(null)
    const categorySelect = useRef(null)
    
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [visible,setVisible] = useState(false);
    
    function close() { 
        closeModal({
            type: tools[0].type
        })
    }

    function validateTransaction(){
        let errors = [];        

        if(titleInput.current.value === "") {
            errors.push('Title is invalid')
        }
        console.log(categorySelect.current.value);
        if(categorySelect.current.value === "Choose a category") {
            errors.push('Category is invalid')
        }
        if(amountInput.current.value == 0 && typeof(amountInput.current.value) !== 'number') {
            console.log(amountInput.current.value);
            errors.push('Amount is invalid')
        }
        console.table(errors);
        if(errors.length === 0) {
            console.log('VALID TRANSACTION');
            return true
        }else {
            console.log('INVALID TRANSACTION');
            return false
        }
    }


    function getTransaction(e) {
        e.preventDefault();
        if(validateTransaction()){
            addTransaction({
                id: Math.floor(Math.random() * 100000000),
                text: titleInput.current.value,
                amount: parseInt(amountInput.current.value),
                date: new Date().toLocaleDateString("it-IT"),
                filtered: true,
                category: categorySelect.current.value
            })
            closeModal({
                type: tools[0].type
            })
        }
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
                        <select ref={categorySelect} name="category" className="category-select" onChange={(e) => setCategory(e.target.value)}>
                            {cats}
                        </select>
                        {/* <input ref={categoryInput} name="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." /> */}
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                            >Amount <br />
                            (negative - expense, positive - income)</label
                        >
                        <input ref={amountInput} name="amount "type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="submit-btn" onClick={getTransaction}>Add transaction</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default AddTransaction;
