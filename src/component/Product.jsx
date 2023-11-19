import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {addCart} from '../redux/action'
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import './styles/styleDetalle.css';


export default function Product() {

    const {IdProducto} = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${IdProducto}`);
            setProduct(await response.json());
            setLoading(false);
      }
      getProduct()
    }, [])

    console.log(product)
    console.log(IdProducto)
    
    const Loading = () => {
        return (
        <>
            <div className="col-md-3">
            <Skeleton count={4}  height={350}/>
            </div>
            
        </>
        );
      };

      let source = "data:image/jpeg;base64,";

      const ShowProduct = () => {
        return(
            <>
            {product.category ? 
                        <div className="row">
                        <div className="col-md-6 col-sm-4 imagen-detalle">
                            <img className="imagen-detalle" src={product.image} alt={product.title}  />
                        </div>
                        <div className="col-md-4 col-sm-4 detalle-producto ">
                            <h4 className="text-uppercase text-black-50">
                                {product.category}
                            </h4>
                            <h1 className="display-3 ">
                                {product.title}
                            </h1>
                            <p className="lead fw-bolder">
                                Puntuacion {product.rating.rate}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="display-3 fw-bold my-4">
                                ${product.price}
                            </h3>
                            <p className="lead">{product.description}</p>
                            <button className="btn btn-outline-primary px-4 py-2 mb-2" onClick={() => addProduct(product)}>Agregar al Carrito</button>
                            <Link to="/Carrito" className="btn btn-outline-dark ms-2 px-3 py-2 mb-2">Ir al Carrito</Link>
                        </div>
                    </div>
            : ''
            }

            </>
        )
      }

  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}
