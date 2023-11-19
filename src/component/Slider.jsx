import banner from "./image/Banner.png";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import './styles/Slider.css'

const Slider = () => {
    let source = "data:image/jpeg;base64,";
  
    const [api, setApi] = useState();   
    const [banner1, setBanner1] = useState();
    const [banner2, setBanner2] = useState();
    const [banner3, setBanner3] = useState();
    const [banner4, setBanner4] = useState();
    const [banner5, setBanner5] = useState();
    const [banner6, setBanner6] = useState();
  
  

    async function peticionGet(){
      // const res = await axios.get(url);
      // setApi(res.data);
      // setBanner1(res.data[0].Imagen);
      // setBanner2(res.data[1].Imagen);
      // setBanner3(res.data[2].Imagen);
      // setBanner4(res.data[3].Imagen);
      // setBanner5(res.data[4].Imagen);
      // setBanner6(res.data[5].Imagen);
      
  
    }
     
    useEffect(() => {
      peticionGet();
    },[])
  
         
    return (
      <div className="sliderContent">
        <Carousel fade={false} pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block "
          src={banner ? banner : banner}
          alt="Productos"
          style={{ height: '32vw' }}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block"
          src={banner ? banner : banner}
          alt="Productos"
          style={{ height: '32vw' }}
        />
        
      </Carousel.Item>

   </Carousel>
        
           
  
        
      </div>
    );
}

export default Slider





