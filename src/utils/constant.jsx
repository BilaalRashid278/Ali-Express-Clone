import image_1 from '../assets/img-1.jpg'
import image_2 from '../assets/img-2.jpg'
import image_3 from '../assets/img-3.jpg'
import image_4 from '../assets/img-4.jpg'
import image_5 from '../assets/img-5.jpg'
import Clock_img from '../assets/clock-img.jpg'
import watches from '../assets/watches.jpg'
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

const smlDescription = (` Rechargeable batteries can only be charged under adult supervision.
    Unable to connect more than the recommended number of power supplies.
    The power terminal should not be short-circuited.
    Regularly inspect the wires, plugs, casings, and other components for damage. If any damage is found, stop using them until they are repaired.
    Toys can only use recommended chargers; chargers are not toys.
    Available liquid cleaning toys should be disconnected from the charger before cleaning.`)

const api = [
    {
        name : "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
        id : "203487230",
        brand:"Visit the Apple Store",
        brand_url:"https://www.amazon.com/stores/Apple/page/77D9E1F7-0337-4282-9DB6-B6B8FB2DC98D?ref_=ast_bln",
        pricing:"$899.99",
        availability_status: true,
        images : [
            "https://m.media-amazon.com/images/I/31+G-o8iK-L.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif",
            "https://m.media-amazon.com/images/I/41HZgzxtMZL.jpg",
            "https://m.media-amazon.com/images/I/41wztDY1p-L.jpg",
            "https://m.media-amazon.com/images/I/2187LE6wzGL.jpg",
            "https://m.media-amazon.com/images/I/21ltHjqsBEL.jpg",
            "https://m.media-amazon.com/images/I/31rxSYza-NL.jpg",
            "https://m.media-amazon.com/images/I/81lsU8wipHL.jpg",
        ],
        product_category:"Electronics",
        average_rating:4.8,
        small_description:"About this item All-Day Battery Life – Go longer than ever with up to 18 hours of battery life. Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power. Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily. Stunning Display – With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant. Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before. Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store. Easy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more. Fanless Design – Your MacBook Air stays cool and runs quietly even while tackling intense workloads.AppleCare – Every Mac comes with a one-year limited warranty and up to 90 days of complimentary technical support. Get AppleCare+ to extend your coverage and reduce the stress and cost of unexpected repairs.Environmentally Friendly – MacBook Air is made with a 100% recycled aluminum enclosure and uses less energy for a smaller carbon footprint.Show more",
        total_reviews : "14935",
        total_answered_questions : "749",
        seller_id : null,
        seller_name : "Amazon.com",
        fulfilled_by_amazon : true,
        fast_track_message : "",
        aplus_present : false,
        shipping : "Free Shipping"
    },
    {
        name : "Portable Handheld Fan Cartoon Charging Model Large Wind Dormitory Student Office Worker Selling Like Hotcakes",
        id : "3256805232763317",
        brand:"Visit the Apple Store",
        brand_url:"https://www.aliexpress.us/item/3256805232763317.html",
        pricing:"$24.99",
        availability_status: true,
        images : [
         "https://ae01.alicdn.com/kf/S7b8c26f59fe04aa7a083673c8d85d760Y/Portable-Handheld-Fan-Cartoon-Charging-Model-Large-Wind-Dormitory-Student-Office-Worker-Selling-Like-Hotcakes.jpg"
        ],
        product_category:"Electronics",
        average_rating:3.9,
        small_description: smlDescription,
        total_reviews : "19935",
        total_answered_questions : "259",
        seller_id : null,
        seller_name : "AliExpress.com",
        fulfilled_by_express : true,
        fast_track_message : "",
        aplus_present : false,
        shipping : "Free Shipping"
    },
    {
        name : "Creative Frameless DIY Wall Clock Wall Decal Home Silent Clock Living Room Office Wall Decoration",
        id : "3256324987163317",
        brand:"Alibaba store",
        brand_url:"https://www.alibaba.com",
        pricing:"$11.3",
        availability_status: true,
        images : [Clock_img],
        product_category:"Electronics",
        average_rating:"4.5",
        small_description: ` The small Frameless DIY Wall Clock,is a stylish and exquisite wall decoration,add exquisite and practical decorations to your house.If you are bored of the normal wall clock, you can choose DIY wall clock with wall sticker, to enjoy the fun of DIY with your family.Black Wall Clock is made of high quality acrylic, the frameless and mute design, fashion and practical.You can design the position and size of the clock as you like.Perfect decoration for living room, kids bedroom, dining room, kitchen, office,bathroom, outdoor and indoor.Suitable for gifts and crafts, business gifts, holiday gifts, promotion gifts.Package includes 1 x DIY Wall Clock (NO battery)+ 1 x Instruction Manual +1 x Auxiliary for easier installation.The nail does not damage the wall, only need a hammer to install. `,
        total_reviews : "120000",
        total_answered_questions : "10029",
        seller_id : null,
        seller_name : "Alibaba.com",
        fulfilled_by_alibaba : true,
        fast_track_message : "",
        aplus_present : false,
        shipping : "Free Shipping"
    },
    {
        name : "2023 Mens Fashion Minimalist Watches Men Business Casual Quartz Watch Simple Male Stainless Steel Mesh Band Clock Reloj Hombre",
        id : "32563241874317",
        brand:"Amazon",
        brand_url:"https://www.amazon.com",
        pricing:"$45.5",
        availability_status: true,
        images : [watches],
        product_category:"Fashions",
        average_rating:"4.2",
        small_description: ` Beautiful and discreet men's watch exactly as it is in the ad. Very good. Really metal bracelet. I am a regular customer of this seller, and always send very fast. Is to be congratulated. The agility of the post office in Brazil is terrible as ever. Don't even compare with China Logistics! `,
        total_reviews : "132331",
        total_answered_questions : "102",
        seller_id : null,
        seller_name : "Amazon.com",
        fulfilled_by_amazon : true,
        fast_track_message : "",
        aplus_present : false,
        shipping : "Free Shipping"
    }
];

export {categories,images,api};