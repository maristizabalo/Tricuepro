import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineHome, AiOutlineCloudUpload, AiOutlineBarChart } from 'react-icons/ai';
import { RiAdminFill, RiUploadFill } from 'react-icons/ri';
import { getMenuItemsByPermissions } from '../../utils/menuConfig';
import Logout from '../Logout/Logout';

const NavItem = ({ collapsed }) => {
    const userState = useSelector((store) => store.userInfo.user);
    const menuItems = getMenuItemsByPermissions(userState.rol);
    const itemsNav = Object.keys(menuItems).map((key) => {
        const IconComponent = {
            AiOutlineHome,
            RiAdminFill,
            RiUploadFill,
            AiOutlineCloudUpload,
            AiOutlineBarChart
        }[menuItems[key].icon];

        return {
            key: key,
            icon: <IconComponent size={'24px'} />,
            label: (
                <Link to={menuItems[key].path}>
                    {menuItems[key].label}
                </Link>
            ),
        };
    });

    // Agregar el item de Logout al final
    itemsNav.push({
        label: (<Logout collapsed={collapsed}/>),
        key: 'salir',
    });

    return (
        <div className={`bg-gray-300 mt-4 shadow-sm shadow-primaryRed ${collapsed ? 'px-2' : ''}`}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                className="py-6 rounded-lg"
                items={itemsNav}
            >

            </Menu>
        </div>
    );
};

export default NavItem;