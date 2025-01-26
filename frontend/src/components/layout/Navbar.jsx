import React, { useState } from 'react';
import { Button } from 'antd';
import { UserOutlined, BulbOutlined, MoonOutlined } from '@ant-design/icons';
import logov6 from '../../assets/images/logo_v7-nobackground.png';


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} text-gray-200`}>
            <nav className="flex items-center justify-between px-6 py-4 shadow-md">

                {/* seccion par amanejar el logo */}
                <div className="flex items-center gap-4">
                    <img src={logov6} alt="Logo" width={150} className="rounded-md" />
                </div>

                {/* seccion de botones de navegacion */}
                <div className="flex items-center gap-6">
                    <Button >Inicio</Button>
                    <Button >Repetcion</Button>
                    <Button >Servicio POS</Button>
                    <Button >Contactanos</Button>
                    <Button >Solicitar demo</Button>

                    <Button type="primary" className="rounded-full">
                        <a href="/login">
                            <UserOutlined />
                        </a>
                    </Button>

                    <Button onClick={toggleTheme} className="bg-yellow-500 rounded-full">
                        {isDarkMode ? <BulbOutlined /> : <MoonOutlined />}
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;