import Navbar from './Navbar'
import ImageSlider from './ImageSlider';
import SearchInput from './SearchInput';
import Categories from './categories';
import Rejister from './Rejister';
import Products from './Products';
const Home = () => {
  return (
  <header>
   <div  className=''>
      <nav className="pt-2 px-10">
        <div name='nav-wrapper'>
          <Navbar/>
        </div>
        <div className='w-[100%] flex justify-center md:hidden border'>
          <SearchInput/>
        </div>
      </nav>

      <main className='mt-5 bg-slate-200 pt-4'>
        <div className='flex px-10 gap-3 justify-between'  name="Products-wrapper">

          <div className='hidden lg:block' name='categories-wrapper'> 
            <Categories/>
          </div>

          <div className='lg:w-[54%] w-[100%]' name="ImageSlider">
            <ImageSlider/>
          </div>

          <div className="hidden lg:block" name="Rejister & Sign Up">
            <Rejister/>
          </div>

        </div>

        <div name='small devices products' className="md:flex justify-between px-10 mt-5 flex-wrap md:flex-nowrap hidden  lg:hidden">
          <div className='lg:hidden'>
            <Categories/>
          </div>
          <div className='lg:hidden'>
            <Rejister/>
          </div>
        </div>

        <div className="px-10">
          <Products/>
        </div>
      </main>
   </div>
  </header>
  )
}

export default Home
