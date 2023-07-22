import { Link } from "react-router-dom"
import {api}  from "../utils/constant";
import { useEffect,useState } from "react";
import choice from '../assets/choice.webp';

let GetId;

const Products = () => {
  const [productapi,setProductapi] = useState([]);
  useEffect(()=>{
    setProductapi(api);
  },[]);

  return (
    <div className="flex justify-center gap-2 md:justify-between mt-5 flex-wrap">
      {productapi.map((item,index)=>{
       if(item.images === null || item.images === "" || !item.images){
        return (
          <div key={index} className="w-[270px] border border-[red] rounded-t-lg ">
            <div className="flex justify-center items-center h-[200px] w-[100%] bg-slate-100 rounded-t-lg">
              <span className="font-semibold text-lg ">Unknown Image</span>
            </div>
            <div>
                <h2 className="text-[var(--custom-color)] font-semibold">Price {item.pricing}</h2>
                <img src={choice} alt="" className="w-14" />
                <h4 className="text-sm">{`${item.small_description.slice(0,40)}...`}</h4>
                <h4 className="text-[13px] text-[green]">{item.shipping}</h4>
              </div>
          </div>
        )
       } else {
        return (
         <Link to="/selectedItem" key={index}>
            <div onClick={()=> GetId = item.id} className="w-[270px] cursor-pointer">
              <img src={item.images[0]} alt="Product image"  className="w-[100%] h-[200px] rounded-t-lg"/>
              <div>
                <h2 className="text-[var(--custom-color)] font-semibold">Price {item.pricing}</h2>
                <img src={choice} alt="" className="w-14" />
                <h4 className="text-sm">{`${item.small_description.slice(0,40)}...`}</h4>
                <h4 className="text-[13px] text-[green]">{item.shipping}</h4>
              </div>
            </div>
         </Link>
        )
       }
      })}
    </div>
  )
}
export {GetId}
export default Products
