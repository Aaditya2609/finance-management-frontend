import './App.css';
import { Route, Routes } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import LinksPage from './pages/LinksPage';
import ReportsPage from './pages/ReportsPage';
import SavingsPage from './pages/SavingsPage';
import ExpensesPage from './pages/ExpensesPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="w-full text-center flex justify-between">
      <Nav/>
      <div className='w-full'>
      <Routes>
        <Route path="/" element={<IncomePage/>}/>
        <Route path="/expenses" element={<ExpensesPage/>}/>
        <Route path="/savings" element={<SavingsPage/>}/>
        <Route path="/reports" element={<ReportsPage/>}/>
        <Route path="/links" element={<LinksPage/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
