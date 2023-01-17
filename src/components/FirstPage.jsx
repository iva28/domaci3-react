import React from 'react';
import FormAddStudents from './FormAddStudents';
//import { useEffect,useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

function FirstPage({studenti,loading,changePageName}) {

  //  const [studenti, setStudenti] = useState([]);
   // const[loading, setLoading] = useState(true);
    
   // useEffect(()=> {
   //     axios.get("http://127.0.0.1:8000/api/students").then(odgovor => {
     //       setStudenti(odgovor.data.data);
       //     setLoading(false);
       // })
    //},[]);

    console.log(studenti);
    if (loading) {
      return <h1>Učitavanje...</h1>
    }

    changePageName(true);

  return (
    <div className="first-page">
        
        <h2 id="add-forma-h2">Forma za dodavanje studenta</h2>
      <FormAddStudents  studenti={studenti}/>
    </div>
  );
}

export default FirstPage;
