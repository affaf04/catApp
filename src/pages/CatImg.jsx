import React from 'react'
import { useState, useEffect } from 'react';

function CatImg() {
    const api_key='live_jpuRlLdvEgOlka5Mn8zEtcSaxRLepUwXXHqt4qHbiDo3EpGaLgqQJtTgCiEAz0h2'
    const url = `https://api.thecatapi.com/v1/images/search?api_key= ${api_key}`;

    const [catImg, setCatImg] = useState(0);
      
    const getCatImage = async () => {
          try {
            const response = await fetch(url, {

                    headers: {
                      'x-api-key': api_key,
                    },
                  
            })
            const data = await response.json();
            setCatImg(data[0].url);

            } catch(e){
            console.error(e)
          }
        };
      
        useEffect(() => {
          getCatImage();
        }, []);
  return (
    <div>
        <img className='img' src={catImg} alt="Cat" />
    </div>
  )
}

export default CatImg