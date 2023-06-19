import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from '../../logo/Logo.png';
import { Search } from "../Sections/Search";
// import { DropDownLogIn } from "../Elements/DropDownLogIn";
import { DropDownLogOut } from "../Elements/DropDownLogOut";


export const Header = () => {

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  const [search, setSearchSection] = useState(false);

  const [dropDown, setDropDown] = useState(false);


  useEffect(() => { 
    localStorage.setItem("darkMode", JSON.stringify(mode))
    if(mode) {
      document.documentElement.classList.add("dark")
    } else { 
      document.documentElement.classList.remove("dark")
    }
  }, [mode])


  return (
    <header>
      
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <Link to='/' className="flex items-center">
                  <img src={Logo} className="h-10 mr-3" alt="eBook Logo" />
              </Link>
              <div className="flex items-center relative">
                  <span onClick={() => setMode(!mode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick={() => setSearchSection(!search)}  className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                  </Link>
                  <span onClick={() => setDropDown(!dropDown)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
                  { dropDown && <DropDownLogOut />}
              </div>
          </div>
      </nav>
      {/* <div className="border-b mx-auto max-w-full"></div> */}
      { search && <Search setSearchSection={setSearchSection} />}

    </header>
  )
};
