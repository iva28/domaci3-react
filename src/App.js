import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import NavBar from './components/NavBar';
import Pretraga from './components/Pretraga';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>
        <Routes>
          <Route path="/"  element={<FirstPage/>}/>
          <Route path="/search" element={<Pretraga/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 