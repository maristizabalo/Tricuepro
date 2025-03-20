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


const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const userState = useSelector((store) => store.userInfo.user);
  const getRoleName = (roleNumber) => {
    return Object.entries(ROLES).find(([key, value]) => value === roleNumber)?.[0] || "Desconocido";
  };
  return (
    <Layout className='bg-gray-300'>
      <Sider collapsed={collapsed} className='bg-gray-300' width={240}>
        <div className={`full-view-layout pt-4 ${collapsed ? 'mx-2' : 'mx-4'}`}>
          {/* Información del Usuario */}
          <div className={`bg-white rounded-lg shadow-sm shadow-primaryRed ${collapsed ? 'w-13 h-16 mx-2 p-0' : 'w-full p-3'}`}>
            <div className="flex">
              {/* Icono de Usuario */}
              <FaUserCircle className={`text-5xl text-gray-700 ${collapsed ? 'mx-2' : 'mr-4'}`} />

              {/* Información del Usuario */}
              {!collapsed && (
                <div>
                  <h2 className="text-sm font-semibold">{userState.nombre}</h2>
                  <div className="flex mt-1">
                    <p className="text-xs font-semibold">Rol:</p>
                    <p className="text-xs text-gray-500 ml-1">{getRoleName(userState.rol)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Menú centrado */}
          <NavItem collapsed={collapsed} />
        </div>
      </Sider>
      <Layout className='bg-gray-300'>
        <Header className="shadow-sm shadow-primaryRed mt-4 mr-5 flex rounded-lg bg-white p-0">
          <div className="flex items-center">
            <div className="">
              {collapsed ? (
                <RiMenuUnfoldFill
                  className="text-3xl ml-5 text-primaryRed cursor-pointer rounded-full"
                  onClick={() => setCollapsed(!collapsed)}
                />
              ) : (
                <RiMenuUnfold2Fill
                  className="text-3xl ml-5 text-primaryRed cursor-pointer rounded-full"
                  onClick={() => setCollapsed(!collapsed)}
                />
              )}
            </div>
          </div>
          <div className="flex-1 text-center mt-3">
            <div className="text-black font-extrabold text-4xl">KROCO - BILLAR</div>
          </div>
          <div className="flex space-x-2 mr-4 my-2">
            <img src={logo_kroco} alt="Logo Kroco" className='w-36' />
          </div>
        </Header>
        <Suspense fallback={<Loading fullscreen={false} />} >
          <Content
            className='shadow-sm shadow-primaryRed p-6 bg-white mr-5 mt-4 mb-4 rounded-lg'
          >
            {props.children}
          </Content>
        </Suspense>

      </Layout>
    </Layout>
  );
};
export default AppLayout;