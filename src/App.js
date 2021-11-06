import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
//Global Provider
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <div className="app-container">
      <GlobalProvider>
        <Header />
        <div className="body-container">
          <Balance />
          <IncomeExpenses />
          <Transactions />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
