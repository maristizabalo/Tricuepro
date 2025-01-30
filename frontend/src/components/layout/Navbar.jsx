import React, { useState } from 'react';
import { Button } from 'antd';
import { UserOutlined, BulbOutlined, MoonOutlined } from '@ant-design/icons';
import logov6 from '../../assets/images/logo_v7-nobackground.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleLogin = () => {
        navigate("/login");
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
                    <Button type='link' className='text-white text-lg underline font-extrabold'>Inicio</Button>
                    <Button type='link' className='text-white text-lg underline font-extrabold'>Repetcion</Button>
                    <Button type='link' className='text-white text-lg underline font-extrabold'>Servicio POS</Button>
                    <Button type='link' className='text-white text-lg underline font-extrabold'>Contactanos</Button>
                    <Button type='link' className='text-white text-lg underline font-extrabold'>Solicitar demo</Button>

                    <Button type="primary" onClick={handleLogin} className="rounded-full">
                            <UserOutlined />
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