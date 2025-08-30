import { assets } from "../../assets/assets"
import './AppDownload.css'


const AppDownload = () => {
  return (
    <div className="flex justify-center items-center  h-[300px] ">
        <div className="w-[82%]">
            <div className="app-download   text-center font-bold h-[200px]  text-3xl font-mono mt-[95px]" id="app-download">
                <p>For Better Experience Download <br /> Tomato App </p>
                <div className="app-download-platforms flex justify-center items-center size3">
                    <img src={assets.play_store} alt="" className="ml-[10px] max-w-[1802px] cursor-pointer transition-[0.5s] hover:scale-[1.05]" />
                    <img src={assets.app_store} alt="" className="ml-[40px] max-w-[1802px] cursor-pointer transition-[0.5s] hover:scale-[1.05]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDownload