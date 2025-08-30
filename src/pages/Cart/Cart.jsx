import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"
import './Cart.css'
import { useNavigate } from "react-router-dom";



const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate =useNavigate();

  return (
    <div className="cart ">
      <div className="w-[100%] flex justify-center mb-15">
        <div className="cart-items w-[85%] ">
          <div className="cart-items-title ">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className="h-[1px] bg-[#e2e2e2] border-none" />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" className="w-[50px] item-img" />
                    <p className="text-start">{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p className="cursor-pointer hover:text-white hover:bg-red-700 w-[20px] text-center rounded-[50%]"
                      onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr className="h-[1px] bg-[#e2e2e2] border-none" />
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="flex justify-center bottom-container">

        <div className="w-[85%]  bottom1">
          <div className="cart-bottom flex  justify-between">
            <div className="w-[100%] flex bottom">
              <div className="cart-total w-[60%]">
                <h2 className="font-bold text-3xl mb-10 font-mono">Cart Total:</h2>
                <div className="cal">
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
                        onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
              </div>
            </div>

            <div className="cart-promocode w-[35%] ">
              <div className="">
                <p className="text-[#555]">If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                  <input type="text" placeholder="promo code" name="" id="" className="bg-transparent border-none outline-none"/>
                  <button className=" bg-black text-white border-none rounded-[4px] cursor-pointer hover:bg-black">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;