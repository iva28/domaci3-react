
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import NavBar from './components/NavBar';
import Pretraga from './components/Pretraga';
import Footer from './components/Footer';
//import axios from 'axios';
import { useEffect,useState } from 'react';
import AboutUs from './components/AboutUs';
//import Pagination from './components/Pagination';

function App() {
  const [studenti, setStudenti] = useState([]);
  const[loading, setLoading] = useState(true);
  const[indicate,setIndicate] = useState(true);
  
   //useEffect(()=> {
     //   axios.get("http://127.0.0.1:8000/api/students").then(odgovor => {
       //     setStudenti(odgovor.data.data);
         //  setLoading(false);
        //})
   // },[]);

  
    const getData= ()=>{
    fetch('./data/studenti.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);

        const ucitaniStudenti = [];
        for (const key in myJson) {
       ucitaniStudenti.push({
          id: key,
          ime: myJson[key].ime,
          prezime: myJson[key].prezime,
          indeks: myJson[key].broj_indeksa,
        });
      }
        setStudenti(ucitaniStudenti);   
        setLoading(false);
      })

  }
  useEffect(()=>{
    getData()  
 },[])

     function changePageName(vred) {
      setIndicate(vred);
    }


  return (
    <div className="App">
      <Router>
       <NavBar indicate={indicate}/>
        <Routes>
          <Route path="/"  element={<FirstPage studenti={studenti} loading={loading} changePageName={changePageName} />}/>
          <Route path="/search" element={<Pretraga  changePageName={changePageName}/>}/>
          <Route  path="/about" element={<AboutUs/>}/>
        </Routes>
       
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
 