import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import OrderManagement from './pages/OrderManagement/OrderManagement';
import Customers from './pages/Customers/Customers';
import ApexChart from './components/FirstChart/FirstChart'
import Transactions from './pages/Transactions/Transactions';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
          <Route path='/ordermanagement' exact element={<OrderManagement/>}/>
          <Route path='/customers' exact element={<Customers/>}/>
          <Route path='/transactions' exact element={<Transactions/>}/>
          <Route path='/first' exact element={<ApexChart/>}/>
        </Routes>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
