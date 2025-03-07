import { LockOutlined } from '@ant-design/icons';
// import Logout from '../components/Logout';

const LockPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '4em', marginTop: '20vh' }}> 
        <LockOutlined />
      </div>
      <div style={{ fontSize: '1.5em', marginTop: '2em', textAlign: 'center' }}>
        Comuníquese con servicio al cliente para acceder al sistema
      </div>
      <div style={{ marginTop: '2em' }}>
        {/* <Logout /> */}
        DEBERIA IR UN VOLVER AL INICIO
      </div>
    </div>
  );
}

export default LockPage;
