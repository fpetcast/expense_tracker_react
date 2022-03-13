import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function Transactions() {
        const {transactions} = useContext(GlobalContext);

        const History = transactions.filter(transaction => transaction.filtered == true).map((transaction) =>
        <li key={transaction.id} className={transaction.amount > 0 ? "transaction plus" : "transaction minus"}>
        <Transaction transaction={transaction} />
        </li>
        );

        return(
            <div className="transactions">
                <h3>History</h3>
                <ul className="history">
                    {History}
                </ul>
            </div>
        )
}

export default Transactions;