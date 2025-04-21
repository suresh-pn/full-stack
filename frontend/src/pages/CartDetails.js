import React from "react";
import { useSelector } from "react-redux";   
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CartDetails() {
    const cartItems = useSelector(state=> state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const deliveryCharge = useSelector(state => state.cart.deliveryCharge);
    const taxes = useSelector(state => state.cart.taxes);
    const grandTotal = useSelector(state => state.cart.grandTotal);

    return (
        <>
        <div className="container  bg-white mt-5 ">
            <Navbar/>
            {cartItems.length ? 
            
                <div className="row mt-5">
                    <h3 className="border-bottom py-2 mb-3 mt-5">shopping Cart</h3>
                    <div className="col-md-8 shadow">
                        <div className="row border-bottom py-4">
                        <div className="col-md-9">items </div>
                        <div className="col-md-1"> Cost </div>
                        <div className="col-md-1"> Qty </div>
                        <div className="col-md-1"> Total </div>
                    </div>
                    <div className="container border-right">
                        {cartItems.map((item) => (
                            <div className="row border p-2 py-4" key={item.id}>
                                <div className="col-md-8 d-flex ">
                                    <img src={item.image} alt={item.title} className="img-fluid" style={{ width: "50px", height: "50px" }} />
                                    <h6 className="ps-3">{item.title}</h6>
                                </div>
                                <div className="col-md-1">
                                    <p className="text-end">{item.price}</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="text-end">{item.quantity}</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="text-end">{item.total_item_price.toFixed(2)}</p>
                                </div>
                            </div>
                  
                ))}
                <hr></hr>
                <div className="row mb-2 py-3 pe-3">
                    <div className="offset-md-9 col-md-1">
                        <h5 className="text-end">Total</h5> 
                    </div>
                    <div className="col-md-1">
                        <h5 className="text-end">{cartCounter}</h5>
                    </div>
                    <div className="col-md-1">
                        <h5 className="text-center">{totalPrice.toFixed(2)}</h5>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 mx-2 pb-5">
                        <p>Sub Total</p> <p>{totalPrice.toFixed(2)}</p>
                        <div className="d-flex justify-content-between mt-2">
                            <p>Delivery Charge</p> <p>{deliveryCharge.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <p>Taxes</p> <p>{taxes.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <p>Grand Total</p> <p>{grandTotal.toFixed(2)}</p>
                        </div>
                        <Link className="float-end btn btn-success" to="/payment">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
             : 
                <h1 className="text-center mt-5">No items in your Cart</h1>}
            
                   </div>
                   </>
                 )
}


        
export default CartDetails;