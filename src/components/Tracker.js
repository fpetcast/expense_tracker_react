import  React , {useContext, useState}  from "react";
import { GlobalContext } from "../context/GlobalState";
import Balance from './Balance';
import Transactions from './Transactions';
import Filters from './Filters';
import AddTransaction from './AddTransaction';
import Search from './Search';
import ToolBar from './ToolBar';

function Tracker() {
 return(
    <React.Fragment>
    <div className="body-container">
        <Balance />
        <Search />
        <Filters />
        <Transactions />
    </div>
    <AddTransaction />
    <ToolBar />
  </React.Fragment>
 )
}

export default Tracker;