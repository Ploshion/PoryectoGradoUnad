import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import  Slider from "./Slider"
import '../component/styles/home.css'

export default function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;


  const urlTest = 'https://fakestoreapi.com/products';


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(urlTest);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
        <div className="col-md-3">
            <Skeleton count={4}  height={350}/>
         </div>
    </>
    );
  };

  console.log(data)

  let source = "data:image/jpeg;base64,";

    const InicioProduct = () => {
      return (
        <>
         
        {filter.map((product) => {
          // if (product.Promocion === "1" ) {
          return (
          <div key={product.IdProducto} className="col-md-3 mb-4">
            <div className="card h-100 text-center d-flex flex-column p-4" key={product.id}>
              <div className="container-img">
                <img src={product.image} className="card-img-top image-custom" alt={product.description} style={{ height: '225px' }} />
              </div>
              <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-0 titleClas" >{product.title}</h3>
                <div className="flex-grow-1"></div> {/* Esto crea un espacio flexible */}
                <p className="card-text lead fw-bold">
                  ${product.price}
                </p>
                <Link to={`/Productos/${product.id}`} className="btn btn-outline-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        );
          }
        // }
          )
        }
      </>
    
      );
    }

    return (
      <div>
         <Slider />
          {/* <div className="hero">
          <div className="card bg-dark text-white border-0">
            <img src="..." className="card-img" alt="..." height={350}/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
             
              </div>
            </div>
          </div>
         
        </div> */}

        <div className="container my-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
               Productos
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <InicioProduct />}
          </div>
        </div>
      </div>
    );
    

}


