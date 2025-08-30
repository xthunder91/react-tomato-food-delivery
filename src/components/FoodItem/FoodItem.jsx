import { useContext } from "react"
import { assets } from "../../assets/assets"
import '../Header/Header.css'
import { StoreContext } from "../../context/StoreContext";


const FoodItem = ({ id, name, price, description, image }) => {

   
    const {cartItems,addToCart,removeFromCart}= useContext(StoreContext);

    return (
        <div className="food-item w-[100%] m-auto rounded-[15px] shadow-[#00000015] shadow-xl transition-[0.3s] fadeIn-animation hover:scale-105 ">
            <div className="food-item-img-container relative ">
                <img className="food-item-image rounded-t-[15px] w-[100%]" src={image} alt="" />
                {
                    !cartItems[id] ? <img src={assets.add_icon_white} alt="" className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]" 
                                        onClick={() => addToCart(id)} />
                        : <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px]  rounded-[50px] bg-white">
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className="w-[30px]"/>
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className="w-[30px]"/>
                        </div>
                }
            </div>
            <div className="food-item-info ">
                <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
                    <p className="text-[20px] font-[500]">{name}</p>
                    <img src={assets.rating_starts} alt="" className="w-[70px]" />
                </div>
                <p className="food-item-desc text-[#676767] text-[12px]">
                    {description}
                </p>
                <p className="food-item-price text-red-500 text-[22px] font-[500] my-[10px] mx-[0px]">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem