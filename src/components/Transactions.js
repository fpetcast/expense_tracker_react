import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function Transactions() {
        const {transactions, deleteTransaction} = useContext(GlobalContext);

        const transaction = transactions.map((transaction) =>
        <li key={transaction.id} className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text} <span>{transaction.amount}€</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
        );

        return(
            <div className="transactions">
                <h3>History</h3>
                <ul className="list">
                    {transaction}
                </ul>
            </div>
        )
}

export default Transactions;