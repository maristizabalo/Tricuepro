import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Menu, X } from "lucide-react";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import logoOscuro from "../../assets/images/logos/negro-nobg.png";
import logoClaro from "../../assets/images/logos/blanco-nobg.png";
import { navItems } from "../../utils/constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const [theme, setTheme] = useState(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    const logo = theme === "dark" ? logoOscuro : logoClaro;
    const ThemeIcon = theme === "dark" ? MoonOutlined : BulbOutlined;

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-slate-100 dark:bg-neutral-900">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-35 mr-2" src={logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item flex items-center space-x-2">
                                <p className="text-neutral-900 dark:text-slate-100 cursor-pointer text-lg font-extrabold hover:text-purple-700 transition-all duration-300">
                                    {item.icon}
                                </p>
                                <LinkScroll
                                    activeClass="active"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    className=" text-neutral-900 dark:text-slate-100 cursor-pointer text-lg font-extrabold hover:text-purple-700 transition-all duration-300"
                                    onClick={() => setMobileDrawerOpen(false)}
                                >
                                    {item.label}
                                </LinkScroll>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <button onClick={handleChangeTheme} className="text-xl py-2 px-3 text-neutral-900 dark:text-slate-100 font-extrabold hover:text-purple-700 transition-all duration-300 p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                            <ThemeIcon />
                        </button>
                        <Link to="/login">
                            <button className="bg-gradient-to-r from-yellow-700 to-[#1b5d3c] py-2 px-3 rounded-md text-lg font-extrabold hover:text-purple-700 transition-all duration-300">
                                Iniciar Sesión
                            </button>
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-slate-100 dark:bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4 flex items-center space-x-2">
                                    <p className="text-neutral-900 dark:text-slate-100 cursor-pointer text-lg font-extrabold hover:text-purple-700 transition-all duration-300">
                                        {item.icon}
                                    </p>
                                    <LinkScroll
                                        activeClass="active"
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-110}
                                        duration={500}
                                        className="text-neutral-900 dark:text-slate-100 cursor-pointer text-lg font-extrabold hover:text-purple-700 transition-all duration-300"
                                        onClick={toggleNavbar}
                                    >
                                        {item.label}
                                    </LinkScroll>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <button
                                onClick={handleChangeTheme}
                                className="text-xl py-2 px-3 text-neutral-900 dark:text-slate-100 font-extrabold hover:text-purple-700 transition-all duration-300 p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                                <ThemeIcon />
                            </button>
                            <Link to="/login">
                                <button className="py-2 px-3 rounded-md bg-gradient-to-r from-yellow-700 to-[#1b5d3c] text-lg font-extrabold hover:text-purple-700 transition-all duration-300">
                                    Iniciar Sesión
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;