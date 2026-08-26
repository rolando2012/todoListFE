import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: "Tareas" },
        { id: 2, text: "Categorias" },
        { id: 3, text: "Etiquetas" },
    ];

    return (
        <div className="bg-indigo-600 flex justify-between items-center h-20 mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-white">To-Do List</h1>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className="p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-full"
                }
            >
                <h1 className="w-full text-3xl font-bold text-white m-4">To-Do List</h1>

                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className="p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600"
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
