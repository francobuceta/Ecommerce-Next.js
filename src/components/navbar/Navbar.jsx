import Logo from "./Logo";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header className="navbar bg-custome-secondary sm:px-32 p-8">
      <Logo />

      <div className="flex items-center gap-6">
        <CartWidget />

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <VscAccount fontSize={30} color="white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/auth">
                Ingresar / Registrarse
              </Link>
            </li>
            <li>
              <a>Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
