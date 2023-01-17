import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import NavBar from './components/NavBar';
import Pretraga from './components/Pretraga';
import Footer from './components/Footer';

import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [studenti, setStudenti] = useState([]);
  const[loading, setLoading] = useState(true);
  const[indicate,setIndicate] = useState(true);

    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/students").then(odgovor => {
            setStudenti(odgovor.data.data);
           setLoading(false);
        })
    },[]);

    function changePageName(vred) {
      setIndicate(vred);
    }


  return (
    <div className="App">
      <Router>
       <NavBar indicate={indicate}/>
        <Routes>
          <Route path="/"  element={<FirstPage studenti={studenti} loading={loading} changePageName={changePageName}/>}/>
          <Route path="/search" element={<Pretraga studenti={studenti} changePageName={changePageName}/>}/>
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
 