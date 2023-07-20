import {BsPersonCircle} from 'react-icons/bs'
import '../App.css'
import RegisterImage from '../assets/ping-img.webp'

const Rejister = () => {
  return (
    <div className='img w-[320px] lg:w-[250px] h-[430px] md:pt-5 flex md:justify-center'>
      <div className='w-[100%] md:w-[95%] flex items-center flex-col'>
        <div className='inline-block md:block'>
            <BsPersonCircle color='#BDBDBD' size={40} className='m-auto md:mb-3'/>
            <h2 className='md:text-center font-bold md:text-base text-sm'>Welcome to AliExpress</h2>
        </div>
        <div className='flex gap-8 my-3' name="Register & Sign Up button">
          <button className='px-5 py-[7px] rounded-3xl bg-[var(--custom-color)] font-semibold text-white'>Register</button>
          <button className='px-5 py-[7px] rounded-3xl bg-slate-200 font-semibold text-black'>Sign in</button>
        </div>
        <div>
            <img src={RegisterImage} className='rounded-lg h-[260px] w-[400px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rejister
