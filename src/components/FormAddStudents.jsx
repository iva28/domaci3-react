import React from 'react'
import { useState } from 'react';

function FormAddStudents(props) {

const[student,setStudent] = useState({
    ime:'',
    prezime:'',
    broj_indeksa:'',
})

  return (
    <div className="form-add-student">
        
        <div className="add-student-fields">
                <label>Ime: </label>
                <input type={'text'} className="form-control" value={student.ime} />
            </div>
            <div className="add-student-fields">
                <label>Prezime: </label>
                <input type={'text'} className="form-control" value={student.prezime}  />
            </div>
            <div className="add-student-fields">
                <label>Broj indeksa: </label>
                <input type={'text'} className="form-control" value={student.broj_indeksa}  />
            </div>
            <button type="button" className="btn btn-primary" id="dugme_novi">Dodaj</button>
            
    </div>
  )
}

export default FormAddStudents
