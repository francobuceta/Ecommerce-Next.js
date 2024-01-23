"use client";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "@/store/slices/userSlice";
import { emptyCart } from "@/store/slices/cartSlice";
import { HandleDropdown } from "@/utils/HandleDropdown";
import { getRequest } from "@/services/clientFetching";

const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    HandleDropdown();
    await getRequest("/user/logout");
    dispatch(logOutUser());
    dispatch(emptyCart());
  };

  return (
    <div className="flex items-center gap-3">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="cursor-pointer">
          <VscAccount fontSize={30} color="white" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {user.token !== "" ? (
            <>
              <li>
                <Link href="/favourites" onClick={HandleDropdown}>
                  Favoritos
                </Link>
              </li>
              <li>
                <span onClick={handleLogOut}>Cerrar Sesión</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/auth" onClick={HandleDropdown}>
                  Ingresar / Registrarse
                </Link>
              </li>
              <li>
                <Link href="/favourites" onClick={HandleDropdown}>
                  Favoritos
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {user && (
        <div>
          <span className="text-white">{user.firstName}</span>
        </div>
      )}
    </div>
  );
};

export default Account;
