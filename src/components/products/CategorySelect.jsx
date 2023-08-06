"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CategorySelect = () => {
  const [category, setCategory] = useState("");
  const { push } = useRouter();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category !== "") {
      push(`/products/${category}`);
    }
  };

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
            defaultValue="Categoría"
            onChange={(value) => handleCategory(value)}
            className="select select-bordered"
          >
            <option disabled>Categoría</option>
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
          <input type="submit" value="Buscar" className="btn bg-custome" />
        </div>
      </form>
    </section>
  );
};

export default CategorySelect;
