import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: "Tareas" , ruta: "/"},
        { id: 2, text: "Categorias", ruta: "/categories" },
        { id: 3, text: "Etiquetas", ruta: "/tags" },
    ];

    const activeLinkStyle = ({isActive}) =>
        `block p-3 rounded-xl duration-300 ${isActive
            ? "bg-white text-black font-semibold"
            : "hover:bg-indigo-500 text-white"
        }`
    

    return (
        <div className="bg-indigo-600 flex justify-between items-center h-20 mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-white">To-Do List</h1>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li
                        key={item.id} className="m-2"
                    >
                        <NavLink to={item.ruta} className={activeLinkStyle} end={item.ruta === "/"}>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-indigo-700 ease-in-out duration-500 p-4"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 -left-full"
                }
            >
                <h1 className="w-full text-3xl font-bold text-white my-4">To-Do List</h1>

                {navItems.map((item) => (
                    <li
                        key={item.id} className="border-b border-indigo-500 my-2"
                    >
                        <NavLink to={item.ruta} className={activeLinkStyle} end={item.ruta === "/"} 
                                    onClick={handleNav}>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
