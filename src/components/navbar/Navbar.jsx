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
          <label tabIndex={0}>
            <VscAccount fontSize={30} color="white" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/auth">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
