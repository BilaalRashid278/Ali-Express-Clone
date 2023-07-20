import {BsPersonCircle} from 'react-icons/bs'
import '../App.css'


const Rejister = () => {
  return (
    <div className='img w-[320px] lg:w-[250px] h-[100%] md:pt-5 flex md:justify-center'>
      <div className='w-[100%] md:w-[95%] md:flex md:justify-center'>
        <div className='inline-block md:block'>
            <BsPersonCircle color='#BDBDBD' size={40} className='m-auto md:mb-3'/>
            <h2 className='md:text-center font-bold md:text-base text-sm'>Welcome to AliExpress</h2>
        </div>
      </div>
    </div>
  )
}

export default Rejister
