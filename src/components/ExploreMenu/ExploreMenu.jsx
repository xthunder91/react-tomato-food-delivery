import { menu_list } from "../../assets/assets"
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="flex justify-center ">
        <div className="w-[82%] explore">
            <div className="flex flex-col gap-[20px]" id="explore-menu">
                <h1 className="text-[#262626] font-bold text-[28px] font-mono">Explore our menu:</h1>
                <p className=" text-[#808080] para2">Choose from a diverse menu featuring a delecatable array of dishes. Our mission is to satisfy ypur cravings and elevate your dining experience,
                    one delicious meal at a time.</p>
                <div className="flex justify-between items-center gap-[30px] align-middle my-[20px] mx-0 overflow-x-scroll hide-scrollbar">
                    {menu_list.map((item,index) => {
                        return(
                            <div onClick={() => setCategory(prev=> prev===item.menu_name? "All":item.menu_name)} key={index} className="explore-menu-list-item ">
                                <img src={item.menu_image} alt="" className={` ${category=== item.menu_name? "border-[4px] border-red-500 p-[2px]": ""}
                                                                                w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-0.2s`}/>
                                <p className={` mt-[10px] text-[#616161] explore-menu-list-item-p  cursor-pointer font-medium font-mono`}>{item.menu_name}</p>
                            </div>
                        );
                    })}
                </div>
                <hr className="my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none "/>
            </div>
        </div> 
    </div>
  )
}

export default ExploreMenu;