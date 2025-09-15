
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TicketPage from './pages/TicketPage';
import Nav from './components/Nav';

import './App.css';

function App() {

  return (
    <>
      <div className="app">
        < Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
