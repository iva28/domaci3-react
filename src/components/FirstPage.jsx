import React from 'react';
import FormAddStudents from './FormAddStudents';
import { useEffect,useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

function FirstPage() {

    const [studenti, setStudenti] = useState([]);

    
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/students").then(odgovor => {
            setStudenti(odgovor.data.data);
        })
    },[]);

    console.log(studenti);

  return (
    <div className="first-page">
        <NavBar/>
        <h2 id="add-forma-h2">Forma za dodavanje studenta</h2>
      <FormAddStudents  studenti={studenti}/>
    </div>
  );
}

export default FirstPage;
