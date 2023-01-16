import React from 'react'
import FormPretraga from './FormPretraga'
import { useLocation } from 'react-router-dom'

function Pretraga(props) {
    const location = useLocation()
    let nadjen = false;
  //  const studenti = location.state

    function pretraga(ime) {
        console.log("u pretraga fji");
       // console.log(studenti);
        console.log(ime);
       // console.log(studenti.length);
        for (var index = 0; index <props.studenti.length; index++) {
            //console.log("u petlji"+studenti[index].ime);
           if(ime == props.studenti[index].ime) {
            nadjen= true;
            alert("Student: "+props.studenti[index].ime+" je pronadjen");
           }
            
        }
        if (!nadjen) 
        alert("Nema datog studenta");
    }

  return (
    <div className='pretraga'>
        <h1 id='pretraga-h1'>Pretraga studenata..</h1>
        <FormPretraga studenti={props.studenti} pretraga={pretraga} />
      
    </div>
  )
}

export default Pretraga
