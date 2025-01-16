import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
    const antIcon = (
        <div className="custom-spinner">
            <div className="ball yellow"></div>
            <div className="ball red"></div>
            <div className="ball white"></div>
        </div>
    );

    return (
        <div className="loading-container">
            <Spin indicator={antIcon} />
            <div className="loading-text">Cargando...</div>
        </div>
    );
};

export default Loading;
