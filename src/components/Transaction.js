import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane} from '@fortawesome/free-solid-svg-icons'

function Transaction(props) {
        const {deleteTransaction} = useContext(GlobalContext);

        const transaction = props.transaction;

        const formatDate = (date) => {
            return date.toString().substring(0, 10);
        }

        const categories = [
            'travel'
        ]

        function getIcon(category) { 
            switch (category) {
                case 'travel':
                    return faPlane;
                    break;
                default:
                    break;
            }
         }



        return(
            <div className="list-item">
                <div className="t-info">
                <div className="t-icon">
                {categories.includes(transaction.category)  && <FontAwesomeIcon icon={getIcon(transaction.category)} className="t-category" /> 
                }
                </div>
                <div className="t-text">
                    <h3>{transaction.text}</h3>
                    <span className="t-date">{formatDate(transaction.date)}</span>
                </div>
                </div>
                <div className="t-amount">
                {transaction.amount}€
                </div>
                <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </div>
        )
}

export default Transaction;