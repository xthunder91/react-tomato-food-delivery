import './Header.css'

const Header = () => {
  return (
    <div className="flex justify-center top ">
      <div className="w-[82%]  h-[34vw] mt-[30px] mb-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain  relative  header">
          <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] backdrop-blur-[2px] fadeIn-animation header-contents ">
              <h1 className="font-mono font-extrabold size  text-white ">Order your favourite food here</h1>
              <p className="text-white text-[1vw] font-medium para">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
                 ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
              <button className="border-none text-[#747474] font-bold py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)]
                                 rounded-[50px] cursor-pointer h-[40px] w-[100px] hover:text-black button1" >View Menu</button>
          </div>
      </div>
    </div>
  )
}

export default Header