import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardDetail from './pages/CardDetail';
import CardList from './pages/CardList';

function App() {
  return (

    <Router>
      <Routes>
          <Route index path='/' element={<Navigate replace to="/cards" />} />
          <Route path='/cards' element={<CardList />} />
          <Route path="/cards/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
