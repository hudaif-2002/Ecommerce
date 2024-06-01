import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user.email);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const context = useContext(myContext);
  const { toggleMode, mode } = context;

  const cartItems =useSelector((state)=>state.cart)

  return (
    <div className="bg-green-500 sticky top-0 z-50  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allProducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user?<div className="flow-root">
                    <Link
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </Link>
                  </div>:""}

                  {user?.user?.email === "hudaifahamed08@gmail.com" ? (
                    <div className="">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                     <div className="flow-root">
                    <Link
                      to={"/login"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >LOGIN
                     
                    </Link>
                  </div>
                  )}

                 
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="data:image/jpeg;base64,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"

                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-green-600">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Bharat
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allProducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                 {user? <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>:""}

                  {user?.user?.email === "hudaifahamed08@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="/" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                {
                  user?<div className="hidden lg:ml-8 lg:flex">
                  <a href="" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://th.bing.com/th/id/R.1871862d87bb8037d953317fb4497189?rik=MBf1NyuchSQUtQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile.png&ehk=Ouu2uMvvMPnkP1bdIY2BTAzbwhRoG9p03NUzbwGLhlg%3d&risl=&pid=ImgRaw&r=0"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>:<div className="hidden lg:ml-8 lg:flex">
                  <a href="/login" className="flex items-center text-gray-700 ">
                   LOGIN
                  </a>
                </div>
                }

                {/* Light_And_Dark */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
