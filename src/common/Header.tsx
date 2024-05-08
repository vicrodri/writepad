import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/Utils";

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(getLocalStorageItem("isAuth") ?? false);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        setIsAuth(true);
        setLocalStorageItem<boolean>("isAuth", true);
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        localStorage.clear();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <header>
        <Link to='/' className='logo'>
          <img src={Logo} alt='WritePad Logo' />
          <span>WritePad</span>
        </Link>
        <nav className='nav'>
          <NavLink to={"/"} className={"link"}>
            Home
          </NavLink>
          {isAuth === true ? (
            <>
              <NavLink to={"/create"} className={"link"}>
                Create
              </NavLink>
              <button onClick={handleLogout} className='auth'>
                <i className='bi bi-box-arrow-right'> </i>Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogin} className='auth'>
              <i className='bi bi-google'> </i>Login
            </button>
          )}
        </nav>
      </header>
    </>
  );
};
