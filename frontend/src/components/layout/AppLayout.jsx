import React, { Suspense, useState } from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo_kroco from '../../assets/images/logos/blanco-nobg.png'
import { RiMenuUnfold2Fill, RiMenuUnfoldFill } from 'react-icons/ri';
import NavItem from './NavItem';
import Loading from './Loading';
import { ROLES } from '../../utils/constants';
import ThemeToggle from './ThemeToggle';


const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const userState = useSelector((store) => store.userInfo.user);
  const getRoleName = (roleNumber) => {
    return Object.entries(ROLES).find(([key, value]) => value === roleNumber)?.[0] || "Desconocido";
  };
  return (
    <Layout className='bg-red-600'>
      <Sider collapsed={collapsed} width={240}>
        <div className={`bg-gray-300 dark:bg-gray-900 full-view-layout pt-4 ${collapsed ? 'px-2' : 'px-4'}`}>
          {/* Información del Usuario */}
          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm shadow-primary-2-1 ${collapsed ? 'w-13 h-16 mx-2 p-0' : 'w-full p-3'}`}>
            <div className="flex">
              {/* Icono de Usuario */}
              <FaUserCircle className={`text-5xl text-gray-700 dark:text-white ${collapsed ? 'mx-2' : 'mr-4'}`} />

              {/* Información del Usuario */}
              {!collapsed && (
                <div>
                  <h2 className="text-sm font-semibold dark:text-white">{userState.nombre}</h2>
                  <div className="flex mt-1">
                    <p className="text-xs font-semibold dark:text-white">Rol:</p>
                    <p className="text-xs text-gray-500 dark:text-white ml-1">{getRoleName(userState.rol)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Menú centrado */}
          <NavItem collapsed={collapsed} />
        </div>
      </Sider>
      <Layout className='bg-gray-300 dark:bg-gray-900'>
        <Header className="shadow-sm shadow-primary-2 mt-4 mr-5 flex rounded-lg bg-white dark:bg-gray-800 p-0">
          <div className="flex items-center">
            <div className="">
              {collapsed ? (
                <RiMenuUnfoldFill
                  className="text-3xl ml-5 text-primary-2 cursor-pointer rounded-full"
                  onClick={() => setCollapsed(!collapsed)}
                />
              ) : (
                <RiMenuUnfold2Fill
                  className="text-3xl ml-5 text-primary-2 cursor-pointer rounded-full"
                  onClick={() => setCollapsed(!collapsed)}
                />
              )}
            </div>
          </div>
          <div className="flex-1 text-center mt-3">
            <div className="text-black dark:text-white font-extrabold text-4xl">KROCO - BILLAR</div>
          </div>
          <ThemeToggle />
          <div className="flex space-x-2 mr-4 my-2">
            <img src={logo_kroco} alt="Logo Kroco" className='w-36' />
          </div>
        </Header>
        <Suspense fallback={<Loading fullscreen={false} />} >
          <Content
            className='shadow-sm shadow-primary-2 p-6 bg-white dark:bg-gray-800 mr-5 mt-4 mb-4 rounded-lg'
          >
            {props.children}
          </Content>
        </Suspense>

      </Layout>
    </Layout>
  );
};
export default AppLayout;