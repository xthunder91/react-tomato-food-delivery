import { useState } from "react"
import { assets } from "../../assets/assets"
import './LoginPopUp.css'


const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] =useState("Login")

  return (
    
        <div className="login-popup absolute w-[100%] z-30 h-[100%] bg-[#00000090] grid ">
            <form  className="login-popup-container place-self-center text-black bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px]  fadeIn-animations h-[500px] w-[500px] ">
                <div className="login-popup-title flex justify-between  ml-5">
                    <h2 className="text-[24px] font-bold font-mono text-center">{currState}</h2>
                    <div className="img  h-[30px] w-[30px] mr-5 align-middle p-[10px] rounded-[2px]">
                        <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} className="cursor-pointer"/>
                    </div>
                    
                </div>
                <div className="login-popup-inputs w-[80%] ml-5 text-white text-center">
                    {currState==="Login" ? <></>:<input type="text" placeholder="Enter Username" required className="font-mono bg-red-400 hover:bg-red-500 text-white rounded-[20px] h-[40px] w-[100%] ml-7 placeholder-[#ffffffc6] outline-none"/>} <br />
                    <input type="email" placeholder="Enter your email " required className="font-mono bg-red-400 hover:bg-red-500 text-white rounded-[20px] h-[40px] w-[100%] ml-7 placeholder-[#ffffffc6] outline-none"/> <br />
                    <input type="password" placeholder="Enter Password" required className="font-mono bg-red-400 hover:bg-red-500 text-white rounded-[20px] h-[40px] w-[100%] placeholder-[#ffffffc6] ml-7 outline-none"/><br />
                </div>
                <div className="btn text-center "><button className="bg-[#cfc6c6] h-[50px] text-black rounded-[20px] w-[80%] hover:bg-[#9c9898] font-bold font-mono ">
                    {currState==="Sing Up" ? "Create Account" : "Login"}</button></div>
                
                <div className="login-popup-condition ml-12 flex w-[90%] text-center ">
                    <input type="checkbox" required className="accent-red-500"/>
                    <p className="ml-2">By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login" ? 
                        <p className="text-center text-neutral-500 text-[17px]">Create a new account? <span  onClick={() => setCurrState("Sing Up")} className="text-red-500 hover:text-red-700 hover:font-medium ">
                            Click here</span></p>: 
                        <p className="text-center text-neutral-500 text-[17px]">Already have an account? <span onClick={()=> setCurrState("Login")} className="text-red-500 hover:text-red-700 hover:font-medium ">
                            Login here</span></p>}
            </form>
        </div>
    
  )
}

export default LoginPopUp