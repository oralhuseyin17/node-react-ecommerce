import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="">
            <img src={Logo} width={100} alt="Logo" />
          </Link>
          <div>
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-current font-semibold text-lg p-3"
                    : "font-semibold text-lg p-3"
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
          <div>
            <NavLink to="/login" className="font-semibold text-lg p-3">
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-current py-2 px-5 text-[#fff] rounded-full font-semibold text-lg"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
