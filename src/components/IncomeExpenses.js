import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
        const {transactions} = useContext(GlobalContext);

        const amounts = transactions.map(transaction => transaction.amount)

        const totalIncome = amounts
        .filter(transaction => transaction > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2);

        const totalExpense = amounts
        .filter(transaction => transaction < 0)
        .reduce((acc, item) => (acc += item),0) * -1
        .toFixed(2);

        return(
        <div className="inc-exp-container">
            <div>
                <button>Income</button>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-{totalExpense}€</p>
            </div>
        </div>)
}

export default IncomeExpenses;