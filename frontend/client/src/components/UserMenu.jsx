import { useState } from "react";
import { useAuth } from "../context/authContext";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div onClick={() => setOpen(prev => !prev)} className="cursor-pointer">
        <img
          src="https://randomuser.me/api/portraits/men/47.jpg"
          alt=""
          className="rounded-full w-10"
        />
      </div>
      {open && (
        <div className="flex flex-col dropDown">
          <p className="px-[15px]">Usuario 1</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:bg-slate-500 hover:text-white cursor-pointer px-[15px] py-1">
              Perfil
            </li>
            <li className="hover:bg-slate-500 hover:text-white cursor-pointer px-[15px] py-1">
              Settings
            </li>
            <li
              onClick={handleLogout}
              className="hover:bg-slate-500 hover:text-white cursor-pointer px-[15px] py-1"
            >
              Cerrar Sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
