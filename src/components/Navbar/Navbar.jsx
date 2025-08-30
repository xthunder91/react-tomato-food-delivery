import './Navbar.css'
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu, setMenu]= useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext)

    const location = useLocation();
    const navigate = useNavigate();

    const scrollToMenu = () => {
        const menuSection = document.getElementById("explore-menu");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleMenuClick = () => {
        setMenu("Menu");
        if (location.pathname === "/") {
            scrollToMenu();
        } else {
            navigate("/");
            setTimeout(scrollToMenu, 300);
        }
    };


    return(
        
        
            <div className='py-[20px] px-0 flex justify-between items-center mx-[99px] margin navbar '>
               <Link to='/'><img src={assets.logo} alt="" className='w-[150px] logo '/></Link>
               <ul className='flex list-none gap-[40px] text-[#49557e] text-[18px] font-mono cursor-pointer menu '>
                    <Link to='/' onClick={() => setMenu("Home")} className={ `${menu==="Home" ? "active pb-[2px] border-b-2 border-[#49557e] font-bold" : ""} `}>Home</Link>
                    <span onClick={handleMenuClick} className={`${menu==="Menu" ? "active pb-[2px] border-b-2 border-[#49557e] font-bold" : ""}`}>Menu</span>
                    <Link to='/AboutUs' onClick={() => setMenu("AboutUs") } className={`${menu==="AboutUs" ? "active pb-[2px] border-b-2 border-[#49557e] font-bold" : ""}`}>About Us</Link>
                    <a href='#footer' onClick={() => setMenu("Contact Us")}  className={`${menu==="Contact Us" ? "active pb-[2px] border-b-2 border-[#49557e] font-bold" : ""}`}>Contact Us</a>
               </ul>
                <div className='flex items-center gap-[40px] right'>
                    <img src={assets.search_icon} alt="" />
                    <div className='relative'>
                       <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                        <div className={`
                                 ${getTotalCartAmount()===0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px] top-[-8px] right-[-8px]"}`}>
                            {/*  */}
                        </div>
                    </div>
                    <button className="button2 px-4 py-2 bg-red-500 text-white   hover:bg-red-800 transition-colors
                         font-mono h-[40px] w-[80px] cursor-pointer rounded-[50px] " onClick={() => setShowLogin(true)}>Sign-in</button>
                </div>
            </div>
        
        
    );
}

export default Navbar;