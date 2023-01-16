import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import NavBar from './components/NavBar';
import Pretraga from './components/Pretraga';

import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [studenti, setStudenti] = useState([]);
   const[loading, setLoading] = useState(true);
    
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/students").then(odgovor => {
            setStudenti(odgovor.data.data);
           setLoading(false);
        })
    },[]);
  return (
    <div className="App">
      <Router>
       <NavBar/>
        <Routes>
          <Route path="/"  element={<FirstPage studenti={studenti} loading={loading}/>}/>
          <Route path="/search" element={<Pretraga studenti={studenti}/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 