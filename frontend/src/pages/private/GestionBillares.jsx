import { Card, Col, Row } from 'antd';

const GestionBillares = () => {
    const billares = [
        {
            id: 1,
            image: 'https://thumbs.dreamstime.com/b/dise%C3%B1o-retro-de-la-muestra-los-billares-105075454.jpg?w=360',
            mesas: 10,
            mesasActivas: 8,
            ventasHoy: 200,
            ventasMes: 5000,
        },
        {
            id: 2,
            image: 'https://thumbs.dreamstime.com/b/dise%C3%B1o-retro-de-la-muestra-los-billares-105075454.jpg?w=360',
            mesas: 12,
            mesasActivas: 10,
            ventasHoy: 300,
            ventasMes: 6000,
        },
    ];

    return (
        <Row gutter={[16, 16]}>
            {billares.map((billar) => (
                <Col key={billar.id} span={8}>
                    <Card
                        hoverable
                        cover={<img alt={`Billar ${billar.id}`} src={billar.image} className='w-32'/>}
                        className='bg-slate-200 dark:bg-gray-700 border border-secondary-1'
                    >
                        <p>Número de mesas: {billar.mesas}</p>
                        <p>Mesas activas: {billar.mesasActivas}</p>
                        <p>Ventas hoy: ${billar.ventasHoy}</p>
                        <p>Ventas este mes: ${billar.ventasMes}</p>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default GestionBillares;