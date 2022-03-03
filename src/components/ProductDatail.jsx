import React,{useState} from 'react';
import {useParams} from 'react-router';
import DATA from '../Data';
import {useDispatch} from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';


const ProductDatail = () => {

    const [cartBtn, setCartBtn] = useState("Add to Card")

    const proId = useParams();
    const proDatail = DATA.filter(data => data.id == proId.id)
    const product = proDatail[0];
    console.log(product);

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if(cartBtn === "Add to Card") {
            dispatch(addItem(product));
            setCartBtn("Add Success")
        }
        else {
            dispatch(delItem(product));
            setCartBtn("Add to Card")
        }
    }   

  return (
    <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} height="400px" />
                </div>
                <div className="col-md-6 ">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">{product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={() => handleCart(product)} className="btn btn-outline-primary " >{cartBtn}</button>
                    <button className="btn btn-outline-primary m-3">Buy Now</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProductDatail