import React, { useContext, useState } from 'react'
import "./PlaceOrder1.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder1 = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
    <div className='place-order-left'>
      <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
      </div>
      <input type='email' placeholder='Email address'/>
      <input type='text' placeholder='Street'/>
      <div className='multi-fields'>
        <input type='text' placeholder='City'></input>
        <input type='text' placeholder='State'></input>
      </div>
      <div className='multi-fields'>
        <input type='text' placeholder='Zip Code'></input>
        <input type='text' placeholder='Country'></input>
      </div>
      <input type='text' placeholder='phone'/>
    </div>
    <div className='place-order-right'>
    <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
          <div className='cart-total-details'>
            <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p>Delivery Free</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr/>
                <div className='cart-total-details'>
                  <b>Total</b>
                  <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                </div>
                </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
    </div>
      
    </form>
  )
}

export default PlaceOrder1
