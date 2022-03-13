//An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
export default (state, action) => {
    switch(action.type) {
      case 'GET_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload
        }
      case 'DELETE_TRANSACTION':
        let deletedArray = state.transactions.filter((transaction) => transaction.id != action.payload);

        localStorage.setItem("transactions", JSON.stringify(deletedArray));
        return {
          ...state,
          transactions: state.transactions.filter((transaction) => transaction.id != action.payload)
        }
      case 'ADD_TRANSACTION':
        localStorage.setItem('transactions', JSON.stringify([action.payload,...state.transactions]));
        return {
          ...state,
          transactions: [action.payload,...state.transactions]
        }
      case 'TOOL_ACTION':
         console.log('TOOL_ACTION');
          return {
            ...state,
            tools: state.tools.map(tool => {
              if (tool.type == action.payload && tool.type == 'add') {
                tool.showModal = true
              }
              return tool;
            })
      }
      case 'CLOSE_MODAL':
        console.log('CLOSE_MODAL');
         return {
           ...state,
           tools: state.tools.map(tool => {
             if (tool.type == action.payload && tool.type == 'add') {
               tool.showModal = false
             }
             return tool;
           })
     }
      case 'DATE_FILTER_TRANSACTIONS':
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
        case 'SEARCH_TRANSACTION':
          return {
            ...state,
            transactions: state.transactions.map((transaction) => {
              let regex = new RegExp( action.payload.text, 'i' );
              if (transaction.text.search(regex) != -1) {
                transaction.filtered = true;
              } else {
                transaction.filtered = false;
              }
              return transaction
            } 
            )
          }
          case 'BTN_FILTER_TRANSACTIONS':
            return {
              ...state,
              transactions: state.transactions.map((transaction) => {
                switch (action.payload.type) {
                  case 'Income':
                  console.log('incomes filter');
                  if (transaction.amount > 0) {
                    transaction.filtered = true;
                  } else {
                    transaction.filtered = false;
                  }
                  break;
                  case 'Expense':
                  console.log('expense filter');
                  if (transaction.amount < 0) {
                    transaction.filtered = true;
                  } else {
                    transaction.filtered = false;
                  }
                  default:
                    transaction.filter = true;
                    break;
                }
                return transaction
              } 
              )
            }
        case 'REMOVE_FILTERS':
          return {
            ...state,
            transactions: state.transactions.map((transaction) => {
              transaction.filtered = true;
              return transaction
            } 
            )
          }
      default:
        return state;
    }
  }