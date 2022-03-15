import React , {createContext , useReducer, useEffect} from "react";
import AppReducer from './AppReducer';
import data from '../data/config.json';

//initial state
// const obj_json = JSON.parse(data);

const initialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    rangeOptions : [
        {id:1, number:7, text: 'weekly'},
        {id:2, number:30, text: 'monthly'}
    ]
}

//Create Context => Context is designed to share data that can be considered “global” for a tree of React components
export const GlobalContext = createContext(data)
const dispatchStateContext = createContext(undefined);

//Provider Component => Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, data);

    console.log(state.tools);

    //RETRIEVE TRANSACTIONS FOR CURRENT LOCAL STORAGE USER
    useEffect(() => {
      let storedTransactions = localStorage.getItem("transactions");

      dispatch({
        type:'GET_TRANSACTIONS',
        payload: JSON.parse(storedTransactions)
      })
      return () => {
        
      }
    }, [])


    //ACTIONS LOGIC
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      })
    }


    function addTransaction(transaction) {    
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction,
      })
    }

    function toolAction(tool) {
 
      dispatch({
        type: 'TOOL_ACTION',
        payload: tool,
      })
    }

    function closeModal(modal) {
      dispatch({
        type: 'CLOSE_MODAL',
        payload: modal.type,
      })
    }

    //FILTERING LOGIC
    function dateFilter(date) {

      if(date.filterOn != '...') {
        let today = new Date();
        let endRangeDate = new Date(new Date().setDate(today.getDate() - date.filterOn));
  
        date.today = Date.parse(today);
        date.endRangeDate = Date.parse(endRangeDate);
        date.resetFilters = false
      }else{
        date.resetFilters = true;
      }
      dispatch({
        type: 'DATE_FILTER_TRANSACTIONS',
        payload: date,
      })
    }

    function searchTransaction(transaction) {
      // console.log(transaction.text);
      dispatch({
        type: 'SEARCH_TRANSACTION',
        payload: transaction,
      })
    }

    function btnFilter(btn) { 
      dispatch({
        type: 'BTN_FILTER_TRANSACTIONS',
        payload: btn,
      })
     }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        rangeOptions: state.rangeOptions,
        tools:state.tools,
        categories:state.categories,
        filters: state.filters,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
        toolAction: toolAction,
        dateFilter: dateFilter,
        searchTransaction: searchTransaction,
        btnFilter: btnFilter,
        closeModal: closeModal
      }}>
        {children}
      </GlobalContext.Provider>);
}