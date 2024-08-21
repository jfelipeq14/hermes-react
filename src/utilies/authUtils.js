

export const logout = () => {
    // Aquí puedes eliminar el token del almacenamiento local o del contexto
    localStorage.removeItem("token"); // o el nombre que estés usando
    console.log("Cierre de sesión exitoso");
  };
  