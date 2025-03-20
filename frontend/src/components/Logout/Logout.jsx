import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/authService";
import { resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { BiLogOut } from "react-icons/bi";
import { resetAdmin } from "../../redux/states/admin";
import openNotificationWithIcon from "../../utils/notification";

const Logout = ({ collapsed }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = useSelector((store) => store.userInfo.auth_tokens.refresh);

  const exit = async () => {
    try {
      await logout(refreshToken);
      dispatch(resetUser());
      dispatch(resetAdmin());
      openNotificationWithIcon('success', 'Cerro sesión con exito', '', 4);
      navigate('/');
    } catch (error) {
      dispatch(resetUser());
      openNotificationWithIcon('error', 'Error al cerrar sesión error desde aqui', error.message, 4);
      console.error(error);
      navigate('/');
    }
  };
  const logoutButton = collapsed ?
    <BiLogOut className="text-4xl p-1 ml-[-10px] text-primary-2" onClick={exit} />
    :
    <Button onClick={exit} className="text-white font-extrabold bg-primary-2">Cerrar Sesion</Button>;


  return (
    <>
      {logoutButton}
    </>
  );
};

export default Logout;