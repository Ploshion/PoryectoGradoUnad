import React from 'react';
import facebook from './image/facebook.png';
import whatsapp from './image/whatsapp.png';
import insta from './image/instagram.png';


const Contacto = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Contactanos!</h1>
                    <hr />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 d-flex justify-content-center mb-3">
                    <a href="https://www.facebook.com" target="_blank">
                      <img src={facebook} alt="" style={{ height:'200px' }}  width='150px'/></a>
                    <hr />
                </div>
                <div className="col-md-4 d-flex justify-content-center mb-3">
                  {/* <a href="https://api.whatsapp.com/send?phone=573216599248&text=Hola, Nececito mas informacion!" target="_blank"><img src={whatsapp}  alt="Productos-Whatsapp" height='200px' width='200px'/></a> */}
                  <a href="https://api.whatsapp.com/send?phone=573023714075&text=Hola, Nececito mas informacion!" target="_blank">
                    <img src={whatsapp}  alt="Productos-Whatsapp" style={{ height:'200px' }} width='150px'/></a>
                  <hr />
                </div>
                <div className="col-md-4 d-flex justify-content-center mb-3">
                 <a href="https://www.instagram.com" target="_blank">
                  <img src={insta}  alt="Productos-Whatsapp" style={{ height:'200px' }} width='150px' /></a> 
                  <hr />
                </div>
                
            </div>
        </div>


    </div>
  )
}

export default Contacto