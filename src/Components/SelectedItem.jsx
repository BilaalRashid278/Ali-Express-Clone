import { GetId } from "./Products"
import { api } from "../utils/constant";
import { useEffect} from "react";
const SelectedItem = () => {

  const item = api.filter((item)=>{
    return item.id == GetId
   })
  useEffect(()=>{
   
  },[]);
  console.log(item);
  return (
    <div>
      {item[0].pricing}
    </div>
  )
}

export default SelectedItem
