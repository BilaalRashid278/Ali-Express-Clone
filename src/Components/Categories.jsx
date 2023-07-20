import { categories } from "../utils/constant"
import {TfiMenuAlt} from 'react-icons/tfi'

const Categories = () => {
  return (
   <div className="w-[350px] lg:w-[280px] bg-white rounded-md px-5 flex items-center flex-col">
    <div className="w-[100%] flex items-center my-2">
              <span><TfiMenuAlt size={22}/></span>
              <span className="text-[15px] cursor-pointer px-2 pb-[0.8px] font-bold">Categories</span>
    </div>
    {categories.map((category,index)=>{
        return(
            <div key={index} className="w-[100%] flex items-center my-2 hover:shadow-lg hover:font-semibold cursor-pointer">
              <span>{category.icon}</span>
              <span className="text-[15px] px-2 pb-[0.8px]">{category.name}</span>
            </div>
        )
    })}
   </div>
  )
}

export default Categories
