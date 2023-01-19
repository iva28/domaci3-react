//import React, { useState } from 'react'
import React from 'react'
import FormPretraga from './FormPretraga'
import { useLocation } from 'react-router-dom';

function Pretraga({changePageName}) {
    let nadjen = false;
    let reset =false;

    const location = useLocation()
    const {studenti} = location.state


   changePageName(false);
  
    function pretraga(ime) {
        for (var index = 0; index <studenti.length; index++) {
           if(ime === studenti[index].ime) {
            nadjen= true;
            alert("Student: "+studenti[index].ime+" je pronadjen");
            reset = true;
            break;
           }
           if (reset)
           nadjen = false;
            
        } if (!nadjen) {
          alert("Nema datog studenta");  
        }
        
    }

  return (
    <div className='pretraga'>
        <h1 id='pretraga-h1'>Pretraga studenata..</h1>
        <FormPretraga studenti= {studenti} pretraga={pretraga}/>
    </div>
  )
}

export default Pretraga
