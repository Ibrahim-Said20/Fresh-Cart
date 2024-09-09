import { Link,NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/storeContext';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Navbar() {
  const { counter, setCounter, getCart, total, setTotal } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      const data = await getCart()
      setCounter( data?.numOfCartItems);
      setTotal( data?.data?.totalCartPrice);
    })()
  }, [getCart, setCounter, setTotal])

  return (
    <>
      <div className="navbar w-full mx-auto lg:px-5 flex items-center justify-between bg-[#f0f3f2]">
        <div>
          <div>
            <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div>
            <ul className="menu menu-horizontal max-md:hidden px-1 text-base">
              <li>
                <NavLink className={"sub-title"} to={"/products"}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className={"sub-title"} to={"/categories"}>
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink className={"sub-title"} to={"/brands"}>
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink className={"sub-title"} to={"/allorders"}>
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to={"/wishlist"} className="dropdown dropdown-end sub-title">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <span>
                  <svg
                    width="18"
                    className="h-5 w-5"
                    height="18"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="butt"
                      strokeLinejoin="bevel"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          <div className="dropdown dropdown-end sub-title">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {counter ? (
                  <span className="badge bg-[#0aad0a] text-[#f0f3f2] border-0 badge-sm indicator-item">
                    {counter}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              tabIndex={0}
              className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#f0f3f2] shadow`}
            >
              <div className="card-body">
                <span className="font-bold text-lg">{counter} Items</span>
                <span className="text-[#0aad0a] font-semibold">
                  Total Price: {total}
                </span>
                <Link to={"/cart"}>
                  <button className="btn btn-accent btn-block">
                    View Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 max-md:hidden text-base">
              <li>
                <NavLink
                  to={"/login"}
                  onClick={() => localStorage.clear()}
                  className={"sub-title"}
                >
                  SignOut
                </NavLink>
              </li>
            </ul>
          </div>
          <div dir="rtl" className="navbar-end text-black hidden max-md:block">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f0f3f2] rounded-box w-52 text-base"
              >
                <li>
                  <NavLink className={"sub-title"} to={"/products"}>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"sub-title"} to={"/categories"}>
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"sub-title"} to={"/brands"}>
                    Brands
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"sub-title"} to={"/allorders"}>
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/login"}
                    onClick={() => localStorage.clear()}
                    className={"sub-title"}
                  >
                    SignOut
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
        <li>
          <a href="register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Register</a>
        </li>
      
      <ul className="font-medium items-center flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
      <li className='flex gap-4'>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"><FaFacebookSquare /></a>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"><FaTwitter /></a>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"><FaLinkedin /></a>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"><FaYoutube /></a>
        </li>
      </ul>
      </div>
    </>
  );
}

export default Navbar