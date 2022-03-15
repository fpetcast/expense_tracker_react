import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

function Transaction(props) {
        const {deleteTransaction,tools, categories} = useContext(GlobalContext);


        const transaction = props.transaction;

        const formatDate = (date) => {
            return date.toString();
        }

        function getIcon(category) { 
            switch (category) {
                case 'travel':
                    return faPlane;
                    break;
                case 'salary':
                    return faMoneyBill;
                    break;
                default:
                    break;
            }
         }

        return(
            <div className="list-item">
                <div className="t-info">
                <div className="t-icon">
                {transaction.category && <FontAwesomeIcon icon={getIcon(transaction.category)} className="t-category" /> 
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