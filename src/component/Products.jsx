import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const urlLocal = "http://localhost/apirestmjestic/";
  const urlTest = 'https://fakestoreapi.com/products';
  const urlCategories = 'https://fakestoreapi.com/products/categories'
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(urlTest);
      const categories = await fetch(urlCategories);
      if (componentMounted) {
        setCategories(await categories.clone().json());
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
        console.log(await categories.clone().json());
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

  const filterProduct = (cat) => {
      const updateList = data.filter((x) =>x.category == cat);
      setFilter(updateList)
  }

  let source = "data:image/jpeg;base64,";

  const ShowProducts = () => {
    return (
      <>
      <div className="buttons d-flex flex-wrap justify-content-center mb-5 pb-5">
        {categories.map((cat, index) => 
          <button key={index} className="btn btn-outline-primary mb-2 me-2" onClick={() => filterProduct(cat)}>{cat}</button>
        )}
        <button className="btn btn-outline-primary mb-2" onClick={() => setFilter(data)}>Todo</button>
      </div>
        {filter.map((product) => {
          return (
            <>
          <div key={product.IdProducto} className="col-md-3 mb-4">
            <div className="card h-100 text-center d-flex flex-column p-4" key={product.id}>
              <div className="container-img">
                <img src={product.image} className="card-img-top image-custom" alt={product.description} style={{ height: '225px' }} />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-0 titleClas" >{product.title}</h5>
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
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Ultimos Productos
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
