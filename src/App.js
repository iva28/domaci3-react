import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import NavBar
 from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>
        <Routes>
          <Route path="/"  element={<FirstPage/>}/>

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
