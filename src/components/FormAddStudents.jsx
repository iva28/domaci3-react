import React from 'react'
import { useState } from 'react';

function FormAddStudents(props) {
  //ucitani studenti
  const[studenti,setStudenti] = useState(props.studenti);


const[student,setStudent] = useState({
    ime:'',
    prezime:'',
    broj_indeksa:'',
})

console.log(studenti);

function noviStudent(student) {
  setStudenti(studenti => [...studenti,student]);
  alert('Uspesno dodat student '+student.ime+'!');
}

console.log(studenti);

  return (
    <div className="form-add-student">
        
        <div className="add-student-fields">
                <label><b>Ime:</b> </label>
                <input type={'text'} className="form-control" value={student.ime} onChange= {e => setStudent({...student,ime:e.target.value}) }/>
            </div>
            <div className="add-student-fields">
                <label><b>Prezime:</b></label>
                <input type={'text'} className="form-control" value={student.prezime}  onChange= {e => setStudent({...student,prezime:e.target.value}) }/>
            </div>
            <div className="add-student-fields">
                <label><b>Broj indeksa:</b> </label>
                <input type={'text'} className="form-control" value={student.broj_indeksa}  onChange= {e => setStudent({...student,broj_indeksa:e.target.value}) }/>
            </div>
            <button type="button" className="btn btn-primary" id="dugme_novi" onClick={()=>noviStudent(student)}>Dodaj</button>
            
    </div>
  )
}

export default FormAddStudents
