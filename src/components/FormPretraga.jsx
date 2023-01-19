import React from 'react'
import { useState } from 'react'

function FormPretraga(props) {
    console.log('Form pretraga..')
    console.log(props.studenti)

    const[ime, setIme] = useState('');

    function handle(e) {
        setIme(e.target.value);
    }

  return (
    <div className='form-pretraga'>
    <input type={'text'} className="form-control"  value={ime} onChange={handle} />
    <button type="button" onClick={()=> props.pretraga(ime)} className="btn btn-outline-primary" id="button-pretraga">Pretraži</button>
    </div>
  )
}

export default FormPretraga

