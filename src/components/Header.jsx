import {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../context/SidebarContext";
import {CartContext} from "../context/CartContext";
import ShopIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../assets/logo.png";
import Profile from "../assets/pic.svg";
import {Avatar, Dropdown} from "flowbite-react";
import Cookies from "js-cookie";
import Auth from "../utils/Auth";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout(navigate);
  };

  const username = Cookies.get("username");
  const {open, setOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setActive(true) : setActive(false);
    });
  });
  return (
    <div className={`${active ? "bg-white shadow-2xl" : "bg-white border-b"} w-full fixed z-10 transition-all`}>
      <div className="container mx-auto flex justify-between items-center px-10">
        <Link to="/">
          <img className="w-28 h-20 bg-transparent" src={Logo} />
        </Link>
        <div className="flex justify-between gap-5">
          <div className="flex relative max-w-[43px]" onClick={() => setOpen(!open)}>
            <ShopIcon className="flex relative w-8 cursor-pointer" />
            <div className="flex justify-center bg-red-500 w-5 h-5 text-white items-center text-xs rounded-full absolute -right-1 -bottom-1">
              {itemAmount}
            </div>
          </div>
          <div className="h-8 items-center">
            <Dropdown inline label={<Avatar img={Profile} />}>
              <Dropdown.Header>
                <span className="block text-sm">{username}</span>
                <span className="block truncate text-sm font-medium">example@gmail.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Setting</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <button onClick={handleLogout}>Sign Out</button>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
