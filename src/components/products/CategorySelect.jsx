"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const CategorySelect = () => {
  const [category, setCategory] = useState("Categoria");
  const { push } = useRouter();
  const urlPath = usePathname();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category !== "") {
      push(`/products/${category}`);
    }
  };

  useEffect(() => {
    const pathName = urlPath.slice("/products/".length);
    if (pathName) {
      setCategory(pathName);
    }
  }, []);

  return (
    <section className="mx-5">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center gap-10"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-lg text-white">Elige una categoría:</span>
          </label>
          <select
            value={category}
            onChange={(value) => handleCategory(value)}
            className="select select-bordered"
          >
            <option value="">Categoría</option>
            <option value="teclados">Teclados</option>
            <option value="mouses">Mouses</option>
            <option value="auriculares-y-microfonos">
              Auriculares y Micrófonos
            </option>
            <option value="sillas-gamers">Sillas Gamers</option>
            <option value="camaras-web">Cámaras Web</option>
            <option value="pads">Pads</option>
            <option value="volantes-y-gamepads">Volantes y gamepads</option>
            <option value="parlantes-y-audio">Parlantes y audio</option>
          </select>
        </div>

        <div className="flex items-end">
          <input
            type="submit"
            value="Buscar"
            className="btn bg-custome button-darkMode"
          />
        </div>
      </form>
    </section>
  );
};

export default CategorySelect;
