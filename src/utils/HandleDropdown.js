//Aplicamos esta función para poder cerrar el dropdown de DaisyUi al clickear un <li>
export const HandleDropdown = () => {
  const elem = document.activeElement;
  elem?.blur();
};
