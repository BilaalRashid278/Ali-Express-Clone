import { images } from "../utils/constant"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useState} from "react"


const ImageSlider = () => {
  const [ImgIndex,setImgIndex] = useState(0);

  return (
    <div className="bg-slate-100 relative h-[270px] w-[100%] min-w-[400px]">
      <img src={images[ImgIndex]} alt=""  className="h-[100%] w-[100%] rounded-lg"/>
      <button onClick={()=>{
        if(ImgIndex < 0){
            setImgIndex(images.length - 1);
        }else{
            setImgIndex(ImgIndex - 1);
        }
      }} className="absolute top-[50%] left-1 bg-slate-100/[0.6] p-2 rounded-full"><AiOutlineArrowLeft size={23}/></button>
      <button onClick={()=>{
         if(ImgIndex > images.length - 1){
            setImgIndex(0);
        }else{
            setImgIndex(ImgIndex + 1);
        }
      }} className="absolute top-[50%] right-1 bg-slate-100/[0.6] p-2 rounded-full"><AiOutlineArrowRight size={23}/></button>
    </div>
  )
}

export default ImageSlider
