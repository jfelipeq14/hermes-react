let userLogin = [];

export const loginUser = (user) => {
  if (user) {
    userLogin.push(user);
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    return true;
  }
};

export const logOut = (user) => {
  userLogin.findIndex((userObj, index) => {
    if (userObj.email === user.email) {
      userLogin.splice(index, 1);
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      return false
    }
  });
};

export const getUser = () => {
  const users = JSON.parse(localStorage.getItem("userLogin"));
  console.log(users);
};
