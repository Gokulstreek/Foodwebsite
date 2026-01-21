import React from 'react'
import './PlaceOrder.css'
import { useSelector } from 'react-redux'
import { selectCartAmount } from '../../Redux/Cart'
const PlaceOrder = () => {
const cartAmount=useSelector (selectCartAmount);
const getTotalCartAmount=()=>{
  return cartAmount;
}

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">
          User Information
        </p>
         <div className="multi-fields">
          <input type="text" placeholder='first-name'/>
          <input type="text" placeholder='last-name'/>
         </div>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Address'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='PIN-Code'/>
         </div>
        <input type="text" placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
         <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
                 <p>Delivery</p>
                 <p>${getTotalCartAmount() === 0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
               <b>Total</b>
               <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button className='checkout-btn' >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
