import {Link, NavLink} from 'react-router-dom'
import logo from "../../assets/Images/shatayu-logo.png"


const Header = () => {
        return (
            <header className="shadow sticky z-50 top-0" >
                <nav className="bg-white bg-opacity-65 border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-20"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition ease-in-out duration-300"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition ease-in-out duration-300"
                            >
                                Get started
                            </Link>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        className={() =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/about"}
                                        className={() =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/contact"}
                                        className={() =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className={() =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Shop
                                    </NavLink>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

export default Header
