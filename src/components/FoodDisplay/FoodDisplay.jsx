import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem";
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const {food_list} =useContext(StoreContext);


  return (
    <div className="flex justify-center">
        <div className="w-[82%]">
            <div id="food-display" className="food-display mt-[30px] ">
                <h2 className="font-semibold font-mono size2  font-">Top dishes near you</h2>
                <div className="food-display-list mt-[30px] gap-[30px] gap-y-[50px]">
                    {food_list.map((item,index) => {
                        if (category==="All" || category===item.category) {
                            return <FoodItem key={index} id={item._id} name={item.name} 
                                    description={item.description} price={item.price} image={item.image} />
                        }
                        
                    })}
                </div>

            </div>
        </div>
    </div>
  )
}

export default FoodDisplay