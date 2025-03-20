import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiBilliardsLine } from 'react-icons/ri';
import { FaCrown } from "react-icons/fa";
import { getMenuItemsByPermissions } from '../../utils/menuConfig';
import Logout from '../Logout/Logout';

const NavItem = ({ collapsed }) => {
    const userState = useSelector((store) => store.userInfo.user);
    const menuItems = getMenuItemsByPermissions(userState.rol);
    const itemsNav = Object.keys(menuItems).map((key) => {
        const IconComponent = {
            FaCrown,
            RiBilliardsLine
        }[menuItems[key].icon];

        return {
            key: key,
            icon: <IconComponent size={'24px'} />,
            className: 'bg-white dark:bg-gray-800 rounded-lg shadow shadow-primary-1',
            label: (
                <Link to={menuItems[key].path}>
                    {menuItems[key].label}
                </Link>
            ),
        };
    });

    // Agregar el item de Logout al final
    itemsNav.push(
        {
            label: (<Logout collapsed={collapsed} />),
            key: 'salir',
        }
    );

    return (
        <div className={`mt-4 shadow-sm shadow-primary ${collapsed ? 'px-2' : ''}`}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                className="py-6 rounded-lg dark:bg-gray-800"
                items={itemsNav}
            >
            </Menu>
        </div>
    );
};

export default NavItem;