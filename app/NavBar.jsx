import { BsSearch, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-gray-900 py-4 px-4">
      <div className="holder max-w-[1200px] mx-auto flex justify-between">
        <div className="search&logo flex place-items-center gap-8">
          <Link href={'/'} className="logo text-2xl font-bold text-red-app font-fansay hide-on-mobile">
            FilmFlow
          </Link>
          <div className="search w-fit bg-red-app p-2 px-4 text-white rounded-full">
            <form className=" flex place-items-center">
              <input type="text" className=" max-w-[200px] bg-transparent outline-none placeholder:text-white" placeholder="Search" />
              <button>
                <BsSearch />
              </button>
            </form>
          </div>
        </div>

        <div className="user&mode flex place-items-center gap-4">
          <button className="h-10 w-10  rounded-full bg-white flex text-black place-items-center  justify-center">
            {'light' == 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </button>
          <div className="">
            <button className="user p-3 lg:px-4 xl:px-4 lg:p-2 xl:p-2  gap-2 rounded-full bg-white flex font-inter text-black place-items-center justify-center">
              <p className="hide-on-mobile">Login</p>
              <BiUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
