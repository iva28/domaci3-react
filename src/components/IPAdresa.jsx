import React from 'react'
import { useState } from 'react'

function IPAdresa() {

const[adresa,setAdresa] = useState('');

const proveriIP = async () => {
    try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    setAdresa(data);
    console.log(data);

    } catch (error) {
        console.error(error);
    }
}

  return (
    <div>
      {adresa ?  (
        <div>
          <p>
            <b>Vaša ip adresa je:</b> {adresa.ip}
          </p>
          <p>
            <b>Država i grad:</b> {adresa.country_name}, {adresa.city}
          </p>
        </div>
      ) : (
        <button  onClick={proveriIP} className="btn btn-outline-primary" id="button-pretraga">Prikaži IP adresu</button>
      )}
    </div>
  )
}

export default IPAdresa
