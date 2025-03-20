// errorHandlingService.js
import { resetUser } from '../redux/states/user';
import store from '../redux/store';

export const handle401Error = () => {
  store.dispatch(resetUser())
  window.location.href = "/?session=expired";
}

export const handleDefaultError = (error) => {
  const errorMsg = error.response.data.message
  notification.error({
    message: "Error",
    description: errorMsg || 'Ha ocurrido un error',
    duration: 5
  });
};

export const handleConnectionError = () => {
  const errorMsg = "Error al conectar con el servidor"
  notification.error({
    message: "Error",
    description: errorMsg || 'Ha ocurrido un error',
    duration: 5
  });
};

export const handleErrorResponse = (error) => {
  if (error.response && error.response.status === 401) {
    handle401Error()
  } else if(error.response && error.response.status === 403){
    const errorMsg = error.response.data.message
    notification.error({
      message: "Error",
      description: errorMsg || 'Ha ocurrido un error',
      duration: 5
    });
  }else{
    if (error.code == 'ERR_NETWORK') {
      handleConnectionError()
    } else {
      handleDefaultError(error);
    }
  }
};