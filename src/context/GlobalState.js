import React , {createContext , useReducer} from "react";
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create Context => Context is designed to share data that can be considered “global” for a tree of React components
export const GlobalContext = createContext(initialState)
const dispatchStateContext = createContext(undefined);

//Provider Component => Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //global actions on state
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      })
    }

    //global actions on state
    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction,
      })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction
      }}>
        {children}
      </GlobalContext.Provider>);
}