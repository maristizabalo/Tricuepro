import React, { useState } from 'react';
import { Button, Dropdown, Image, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import logov6 from '../../assets/images/logo_v7-nobackground.png';


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} h-screen text-gray-200`}>
            <nav className="flex items-center justify-between px-6 py-4 shadow-md">
                
                {/* seccion par amanejar el logo */}
                <div className="flex items-center gap-4">
                    <img src={logov6} alt="Logo" width={150} height={150} className="rounded-md" />
                    <h1 className="text-xl font-bold text-white">Company Name</h1>
                </div>

                {/* seccion de botones de navegacion */}
                <div className="flex items-center gap-6">
                    <Button type="link" className="text-white">Button 1</Button>
                    <Button type="link" className="text-white">Button 2</Button>
                    <Button type="link" className="text-white">Button 3</Button>
                    <Button type="link" className="text-white">Button 4</Button>
                    <Button type="text" className="text-white flex items-center">
                        <UserOutlined className="mr-2" /> Login <DownOutlined />
                    </Button>

                    {/* Demo Button */}
                    <Button type="primary" className="bg-blue-500 hover:bg-blue-600">Request Demo</Button>

                    {/* Theme Toggle Button */}
                    <Button onClick={toggleTheme} className="text-white">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;