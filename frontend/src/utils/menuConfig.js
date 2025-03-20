import { LINKS, ROLES } from "./constants";


export const getMenuItemsByPermissions = (userRol) => {
  // Inicializamos un array con el link "inicio", que es común para todos los usuarios
  const menuItems = [];
  console.log(userRol);

  // // Verificamos si el rol es NONE, jugador o propietario y agregamos el link correspondiente
  if (userRol === ROLES.ADMIN) {
    menuItems.push(LINKS.my_tables);
  }

  // Verificamos si el usuario tiene el permiso de cargue en línea y agregamos el link correspondiente
  if (userRol === ROLES.PROPIETARIO) {
    menuItems.push(LINKS.my_billiards);
    menuItems.push(LINKS.my_tables);
  }

  // // Verificamos si el usuario tiene el permiso de cargue masivo y agregamos el link correspondiente
  // if (userRol === ROLES.CARGAR_MASIVAMENTE)) {
  //   menuItems.push(LINKS.cargueMasivo);
  // }

  // // Verificamos si el usuario tiene ROLES de consulta de predios y agregamos el link correspondiente
  // if (userRol === ROLES.CONSULTAR_DISTRITO) || userRol === ROLES.CONSULTAR_ENTIDAD)) {
  //   menuItems.push(LINKS.consultaReportes);
  // }

  return menuItems; // Devolvemos los links permitidos para el usuario
};