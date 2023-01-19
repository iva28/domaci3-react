import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormAddStudents(props) {
  //ucitani studenti
  const[studenti1,setStudenti1] = useState(props.studenti);

const[student,setStudent] = useState({
    ime:'',
    prezime:'',
    broj_indeksa:'',
})

//console.log(studenti);

function noviStudent(student) {
  setStudenti1(studenti1 => [...studenti1,student]);
  alert('Uspesno dodat student '+student.ime+'!');
}

console.log(studenti1);

  return (
    <div className="form-parent">
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

            <div className="link">
              <Link 
              to="/search"
              state= {{
                studenti:studenti1,
              }}
              >
              <button className="btn btn-danger" id="button-pretraga">Pređi na pretraživanje..</button>
              </Link>
            </div>
            </div>
    </div>
  )
}

export default FormAddStudents
