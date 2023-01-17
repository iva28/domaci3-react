import React, { useState } from 'react'
import FormPretraga from './FormPretraga'
import { useLocation } from 'react-router-dom'
//import { useState } from 'react'

function Pretraga({studenti,changePageName}) {
    const location = useLocation()
    let nadjen = false;
  //  const studenti = location.state

  changePageName(false);


    function pretraga(ime) {
        console.log("u pretraga fji");
       // console.log(studenti);
        console.log(ime);
       // console.log(studenti.length);
        for (var index = 0; index <studenti.length; index++) {
            //console.log("u petlji"+studenti[index].ime);
           if(ime == studenti[index].ime) {
            nadjen= true;
            alert("Student: "+studenti[index].ime+" je pronadjen");
           }
            
        }
        if (!nadjen) 
        alert("Nema datog studenta");
    }

   

  return (
    <div className='pretraga'>
        <h1 id='pretraga-h1'>Pretraga studenata..</h1>
        <FormPretraga studenti= {studenti} pretraga={pretraga}/>
      
    </div>
  )
}

export default Pretraga
