import {CiSearch} from 'react-icons/ci'
import '../App.css'
const SearchInput = () => {
  return (
    <div className="border border-[gray] rounded-md w-[100%] h-[38px] flex">
        <input type="text"  className="w-[100%] h-[100%] rounded-t-md rounded-bl-md outline-none border-none px-5" placeholder="Search Everything"/>
        <div className="h-[100%] cursor-pointer w-[50px] rounded-r-md flex justify-center items-center bg-[var(--custom-color)]" name='button'>
            <CiSearch color='white' size={25}/>
        </div>
    </div>
  )
}

export default SearchInput
