import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} =useContext(StoreContext);

  return (
    
        <form className="place-order ml-25 mr-25 flex items-start justify-between gap-[50px]">
          <div className="place-order-left w-[100%]  ">
            <p className="title text-[30px] font-[600] mb-[50px] font-mono">Delivery Information</p>
            <div className="multi-fields flex gap-[10px] ">
              <input type="text" placeholder="First Name" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
              <input type="text" placeholder="Last Name" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
            </div>
            <input type="email" placeholder="Email address" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
            <input type="text" placeholder="Street" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
            <div className="multi-fields multi-fields flex gap-[10px]">
              <input type="text" placeholder="City" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
              <input type="text" placeholder="State" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
            </div>
            <div className="multi-fields multi-fields flex gap-[10px]">
              <input type="text" placeholder="Zip code" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
              <input type="text" placeholder="Country" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
            </div>
            <input type="text" placeholder="Phone" className='mb-[15px] w-[100%] p-[10px] border-[1px] border-[#c5c5c5] rounded-[4px] outline-red-500'/>
          </div>


          <div className="place-order-right mr-12 w-[100%]">
            <div className="cart-total ">
                <h2 className="font-bold text-3xl mb-10 font-mono">Cart Total:</h2>
                <div className="cal mb-[30px]">
                  <div className="cart-total-details flex justify-between text-[#555]">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr className="h-[1px] bg-[#8c8787] border-none" />
                  <div className="cart-total-details flex justify-between text-[#555]">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
                  </div>
                  <hr className="h-[1px] bg-[#8c8787] border-none " />
                  <div className="cart-total-details flex justify-between text-[#555] mb-5">
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0 ? 0: getTotalCartAmount()+2}</b>
                  </div>
                </div>
                <button className="border-none text-white bg-red-500 rounded-[5px] cursor-pointer h-[45px] hover:bg-red-700"
                        >PROCEED TO PAYMENT</button>
              </div>
          </div>
        </form>
      
  )
}

export default PlaceOrder