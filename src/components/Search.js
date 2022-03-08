import  React , {useContext, useState, useRef}  from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
    const {searchTransaction} = useContext(GlobalContext);

    const [transactionText, setTransactionText] = useState('');

    const transactionInput = useRef(null)

    function getTransaction(e) {
        e.preventDefault();
        
        searchTransaction({
            text: transactionInput.current.value,
        })
    }

    return(
        <div className="form-control search-input">
            <form className="search-form" onSubmit={getTransaction}>
                <input ref={transactionInput} name="transaction" type="text" value={transactionText} onChange={(e) => setTransactionText(e.target.value)} placeholder="search transaction..." />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </form>
        </div>
    );
    
}

export default Search;