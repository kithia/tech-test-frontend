import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './../styles/App.css';
import Layout from './Layout';
import CardDetail from './pages/CardDetail';
import CardList from './pages/CardList';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Layout />} >
          <Route index path='/' element={<Navigate replace to="/cards" />} />
          <Route path='/cards' element={<CardList />} />
          <Route path="/cards/:id" element={<CardDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
