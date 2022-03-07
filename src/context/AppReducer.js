//An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter((transaction) => transaction.id != action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload,...state.transactions]
        }
      case 'FILTER_TRANSACTIONS':
        return {
          ...state,
          transactions: state.transactions.map((transaction) => {
            if (Date.parse(transaction.date) >= action.payload.endRangeDate && Date.parse(transaction.date) <= action.payload.today) {
              transaction.filtered = true;
            } else {
              transaction.filtered = false;
            }
            if (action.payload.resetFilters) {
              transaction.filtered = true;
            }
            return transaction
          } 
          )
        }
        // case 'REMOVE_FILTERS':
        //   return {
        //     ...state,
        //     transactions: state.transactions.map((transaction) => {
        //       if (Date.parse(transaction.date) >= action.payload.endRangeDate && Date.parse(transaction.date) <= action.payload.today) {
        //         transaction.filtered = true;
        //       } else {
        //         transaction.filtered = false;
        //       }
        //       return transaction
        //     } 
        //     )
        //   }
      default:
        return state;
    }
  }