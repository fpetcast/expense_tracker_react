//styles
import './assets/scss/main.css';
//libraries
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//hooks
//components
import Header from './components/Header';
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Filters from './components/Filters';
import AddTransaction from './components/AddTransaction';
import Search from './components/Search';
import ToolBar from './components/ToolBar';
//Global Provider
import { GlobalProvider,GlobalContext} from './context/GlobalState';



function App() {

  return (
    <div className="app-container">
      <GlobalProvider>
        <Header />
        <div className="body-container">
          <Balance />
          <Search />
          <Filters />
          <Transactions />
        </div>
        <AddTransaction />
        <ToolBar />
      </GlobalProvider>
    </div>
  );
}

export default App;
