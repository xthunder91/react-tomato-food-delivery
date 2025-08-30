import { assets } from "../../assets/assets"
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer text-[#d9d9d9] bg-[#323232]  flex flex-col items-center gap-[20px]  " id="footer">
            <div className="footer-content w-[100%] ">
                <div className="footer-content-left flex flex-col items-start gap-[20px]">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia provident,
                        dolorum quis ducimus doloremque qui molestias obcaecati ad consequuntur hic. Magni,
                        tenetur quisquam nisi asperiores similique eius assumenda laudantium!</p>
                    <div className="footer-social-icons flex justify-between w-[30%]">
                        <img src={assets.facebook_icon} alt="" className="cursor-pointer"/>
                        <img src={assets.twitter_icon} alt="" className="cursor-pointer"/>
                        <img src={assets.linkedin_icon} alt="" className="cursor-pointer"/>
                    </div>
                </div>
                <div className="footer-content-center flex flex-col items-start gap-[20px]">
                    <h2 className="font-bold font-mono text-2xl text-white">COMPANY</h2>
                    <ul>
                        <li className="mb-[10px] cursor-pointer">Home</li>
                        <li className="mb-[10px] cursor-pointer">About Us</li>
                        <li className="mb-[10px] cursor-pointer">Delivery</li>
                        <li className="mb-[10px] cursor-pointer">Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right flex flex-col items-start gap-[20px]">
                    <h2 className="font-bold font-mono text-2xl text-white">GET IN TOUCH</h2>
                    <ul>
                        <li className="mb-[10px] cursor-pointer">+91-781188xxxx</li>
                        <li className="mb-[10px] cursor-pointer">contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className="w-[100%] h-[2px] bg-[#808080] border-none"/>
            <p className="footer-copyright">Copyright 2025 &#169; Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer