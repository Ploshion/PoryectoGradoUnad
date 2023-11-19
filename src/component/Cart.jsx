import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delCart,addCart,addOne} from '../redux/action/index'
import { Link } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()
    

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const handleButton = (item) => {
        dispatch(addOne(item))
    }

    const handleButtondel = (item) => {
        dispatch(delCart(item))
    }

    let source = "data:image/jpeg;base64,";
    let salida = "";
    let contador = 0;

    const formater = () => {
        const tabla2 = {};
        console.log(state)
        const enviaData = state.filter((data) =>
          tabla2[data.title] ? false : (tabla2[data.title] = true)
        );

        console.log(enviaData,"hola")

        Object.values(enviaData);
        for (let i in enviaData) {
          contador = contador + 1;
          salida +=
          "%0A" +
          "-"+ enviaData[i]?.title +
           " (" +enviaData[i]?.qty + ") "  +
             enviaData[i]?.price + 
             "%0A"     
            ;
        }
        console.log(salida);
        return salida;
      };

      

     
     const link = `https://api.whatsapp.com/send?phone=573023714075&text=Hola,%20Quisiera%20comprar.%0A%20${formater()}`

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3 style={{ fontSize: '2.5vw' }}>{cartItem.title}</h3>
                            <p className="lead fw-bold" style={{ fontSize: '1.5vw' }}>
                               {cartItem.qty} X ${cartItem.price} = $
                               {cartItem.qty * cartItem.price}
                                </p>
                                <button className='btn btn-outline-dark me-4' onClick={() => handleButtondel(cartItem)}>
                                    <i className='fa fa-minus'></i>
                                </button>
                                <button className='btn btn-outline-dark me-4' onClick={() => handleButton(cartItem)}>
                                    <i className='fa fa-plus'></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    console.log(state)

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <a href={link} target="_blank" className="btn btn-outline-primary mb-5 w-25 mx-auto">Enviar Pedido</a>
                </div>
            </div>
        );
    }


    
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
