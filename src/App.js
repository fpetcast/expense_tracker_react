//styles
import './assets/scss/main.css';
//libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//hooks
//components
import Header from './components/Header';
import Tracker from './components/Tracker';
//Global Provider
import { GlobalProvider,GlobalContext} from './context/GlobalState';




function App() {

  return (
    <div className="app-container">
      <GlobalProvider>
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
