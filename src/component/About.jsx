import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './styles/About.css';
import axios from 'axios';

export const About = () => {

//    const divStyle = {
//     display: 'flex',
//      justifyContent: 'center',
   
//     }
const urlLocal = "http://localhost/apirestmjestic/acercadeindex.php";
const [quien, setQuien] = useState();   

async function peticionGet(){
    // const res = await axios.get(url);
    // setQuien(res.data[0]);
  }
   
  useEffect(() => {
    peticionGet();
  },[])

  return (
    <div className='mt-3' >
        <div className='container '>
            <div className='row mb-3 quien' > 
                <div className='col-md-12 '>
                    <h1 className='text-center'>¿Quienes Somos?</h1>
                    <p className='lead'>
                      {quien ? quien.Quien: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam animi perspiciatis consequuntur odit, aliquid at, vitae recusandae temporibus, minus explicabo vero repellendus itaque voluptate exercitationem ex dicta? Nostrum, fugit.'}  
                    </p>
                </div>
                
            </div>
            {/* <Link to="/Contacto" className='btn btn-outline-primary'>Contactanos</Link> */}

            <div className='row mb-3 video'  >
                <div className='col-md-12'>
                    {/* <h1>Acerca de Nosotros</h1> */}
                    <div className="text-center" >
                       <div className="card-body">
                         <iframe  src="https://www.youtube.com/embed/XI2rH07Pq-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className='row'  >
                <div className='col-md-6 mision'>
                    <h1>Mision</h1>
                    <p className='lead'>
                       {quien ? quien.Mision : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam animi perspiciatis consequuntur odit, aliquid at, vitae recusandae temporibus, minus explicabo vero repellendus itaque voluptate exercitationem ex dicta? Nostrum, fugit.'} 
                    </p>
                </div>
                <div className='col-md-6 vision'>
                    <h1>Vision</h1>
                    <p className='lead'>
                    {quien ? quien.Vision : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam animi perspiciatis consequuntur odit, aliquid at, vitae recusandae temporibus, minus explicabo vero repellendus itaque voluptate exercitationem ex dicta? Nostrum, fugit.'} 
                    </p>
                </div>
       
            </div>
            
                
        
        </div>


    </div>
  )
}
