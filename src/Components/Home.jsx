import Navbar from './Navbar'
import Produts from './Products';
import SearchInput from './SearchInput';
const Home = () => {
  return (
  <header className='pt-2 px-10'>
    <nav className="">
      <div name='nav-wrapper'>
        <Navbar/>
      </div>
      <div className='w-[100%] flex justify-center md:hidden border'>
        <SearchInput/>
      </div>
    </nav>

    <main>
      <div  name="Products-wrapper">
        <Produts/>
      </div>
    </main>

  </header>
  )
}

export default Home
