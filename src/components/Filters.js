import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "../atoms/Button";

function Filters() {
        const {transactions, filters} = useContext(GlobalContext);

        const amounts = transactions.map(transaction => transaction.amount)

        const totalIncome = amounts
        .filter(transaction => transaction > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2);

        const totalExpense = amounts
        .filter(transaction => transaction < 0)
        .reduce((acc, item) => (acc += item),0) * -1
        .toFixed(2);

        const filterBtns = filters.map((filter) => 
            <Button key={filter.id} type={filter.type} text={filter.text} class="filter-btn"/>
        )

        return(
        <div className="filters-container">
            {filterBtns}
        </div>)
}

export default Filters;