import React from 'react';
import FormAddStudents from './FormAddStudents';
import { useEffect,useState } from 'react';
import NavBar from './NavBar';

function FirstPage() {

    const [studenti, setStudenti] = useState([]);

    useEffect(()=> {
        axios.get('/api/students').then(odgovor => {
            setStudenti(odgovor.data.data);
        })
    },[]);

    //console.log(studenti);

  return (
    <div className="first-page">
        <NavBar/>
        <h2>Forma za dodavanje studenta</h2>
      <FormAddStudents  studenti={studenti}/>
    </div>
  );
}

export default FirstPage;
