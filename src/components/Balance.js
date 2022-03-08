import  React , {useContext, useState}  from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
    const {transactions, rangeOptions, dateFilter} = useContext(GlobalContext);
    const [range, setRange] = useState('');

   

    const ranges = rangeOptions.map((op) =>  
    <option key={op.id}>{op.text == '...' ? op.text : op.number}</option>
    );

    function getRange(e) { 
      e.preventDefault();
      console.log(e.target.value);

      dateFilter({
        filterOn: e.target.value
      }
      )
    }

    const amounts = transactions.map(transaction => transaction.amount)
    const totalAmount = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);

    
   
    return (
      <div className="balance-container">
        <div className="col balance"><span className="num amount">{totalAmount} €</span> <span className="label">total balance</span></div>
        <div className="col ranges">
          <select name="date-ranges" onChange={getRange} id="date-ranges" className="num range">
            {ranges}
          </select>
          <span className="label">last days</span>
      </div>
      </div>
    );

}

export default Balance;