import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function Transactions() {
        const {transactions,tools} = useContext(GlobalContext);

        const History = transactions.filter(transaction => transaction.filtered == true).map((transaction) =>
        <li key={transaction.id} className={transaction.amount > 0 ? "transaction plus" : "transaction minus"}>
        <Transaction transaction={transaction}/>
        </li>
        );

        return(
            <div className="transactions">
                <h3 className="history-title">History</h3>
                <ul className={tools[1].editView ? 'history editable' : 'history static'}>
                    {History}
                </ul>
            </div>
        )
}

export default Transactions;