import Logo from "./Logo";
import CartWidget from "./CartWidget";
import Account from "./Account";

const Navbar = () => {
  return (
    <header className="navbar bg-custome-secondary sm:px-32 p-8">
      <Logo />

      <div className="flex items-center gap-6">
        <CartWidget />
        <Account />
      </div>
    </header>
  );
};

export default Navbar;
