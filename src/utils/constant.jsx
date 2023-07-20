import image_1 from '../assets/img-1.jpg'
import image_2 from '../assets/img-2.jpg'
import image_3 from '../assets/img-3.jpg'
import image_4 from '../assets/img-4.jpg'
import image_5 from '../assets/img-5.jpg'
import {GrRestroomWomen} from 'react-icons/gr'
import {AiFillExperiment} from 'react-icons/ai'
import {BsPhoneFill} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {TbWashMachine} from 'react-icons/tb'
import {PiWatchFill} from 'react-icons/pi'
import {AiTwotoneHome} from 'react-icons/ai'
import {PiBagSimpleFill} from 'react-icons/pi'
import {FiDribbble} from 'react-icons/fi'
import {MdHealthAndSafety} from 'react-icons/md'

const categories = [
    {name : "Women's Fashion",icon : <GrRestroomWomen  size={22}/>},
    {name : "Men's Fashion",icon : <AiFillExperiment  size={22}/>},
    {name : "Phones & Telecomunications",icon : <BsPhoneFill  size={22}/>},
    {name : "Computer ,Office & Security",icon : <MdComputer  size={22}/>},
    {name : "Consumer Electronics",icon : <TbWashMachine  size={22}/>},
    {name : "Jewelery & Watches",icon : <PiWatchFill  size={22}/>},
    {name : "Home,Pet & Appliances",icon : <AiTwotoneHome  size={22}/>},
    {name : "Bags & Shoes",icon : <PiBagSimpleFill size={22}/>},
    {name : "Toys , Kids & Babies",icon : <FiDribbble size={22}/>},
    {name : "Beauty Health & Care",icon : <MdHealthAndSafety size={22}/>},
]
const images = [image_1,image_2,image_3,image_4,image_5];

export {categories,images};