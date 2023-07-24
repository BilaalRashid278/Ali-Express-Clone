import { GetId } from "./Products"
import { api } from "../utils/constant";
// import { useEffect} from "react";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";
let item;
const SelectedItem = () => {

     item = api.filter((item)=>{
      return item.id == GetId
     })

  console.log(item);
  return (
    <div>
      <nav className="pt-2 px-10">
        <div name='nav-wrapper'>
          <Navbar/>
        </div>
        <div className='w-[100%] flex justify-center md:hidden border'>
          <SearchInput/>
        </div>
      </nav>

      <main>
        <div className="px-10">
          {item[0].pricing}
        </div>
      </main>
    </div>
  )
}

export default SelectedItem
