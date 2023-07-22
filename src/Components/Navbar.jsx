import logo from '../assets/Ali_Express.png'
import SearchInput from './SearchInput'
import {CiShoppingCart} from 'react-icons/ci'
const Navbar = () => {
  return (
    <div className='h-[60px] flex items-center gap-4 justify-between pr-10'>
      <div className="order-1" name='logo'>
        <img src={logo} alt="AliExpress" className='w-[140px] md:w-[180px]'/>
      </div>

      <div className='order-3  lg:w-[180px] flex justify-center'>
       <div className="flex cursor-pointer text-lg hover:text-[var(--custom-color)]">
        <CiShoppingCart size={40} className='hover:text-[var(--custom-color)]'/>
        <div className="relative">
          <span className='absolute bg-[var(--custom-color)] w-6 text-white text-center text-xs left-[5px] rounded-lg'>{0}</span>
          <span className='absolute top-3'>Cart</span>
        </div>
       </div>
      </div>

      <div className="order-2 w-[70%] hidden  md:flex justify-center md:ml-2 lg:ml-12 " name='Search-input'>
        <SearchInput/>
      </div>
    </div>
  )
}

export default Navbar
