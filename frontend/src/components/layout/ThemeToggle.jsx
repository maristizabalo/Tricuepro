import { useEffect, useState } from "react";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    const ThemeIcon = theme === "dark" ? <MoonOutlined /> : <BulbOutlined />;

    return (
        <button 
            onClick={handleChangeTheme} 
            className="text-xl py-2 px-3 text-neutral-900 dark:text-slate-100 font-extrabold hover:text-secondary transition-all duration-300 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
            {ThemeIcon}
        </button>
    );
};

export default ThemeToggle;