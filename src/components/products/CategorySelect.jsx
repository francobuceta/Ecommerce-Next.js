const CategorySelect = () => {
  return (
    <section className="flex justify-center gap-10">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="text-lg text-white">Elige una categoría:</span>
        </label>
        <select defaultValue="Categoría" className="select select-bordered">
          <option disabled>
            Categoría
          </option>
          <option>Teclados</option>
          <option>Mouses</option>
          <option>Auriculares y Micrófonos</option>
          <option>Sillas Gamers</option>
          <option>Cámaras Web</option>
          <option>Pads</option>
          <option>Volantes y gamepads</option>
          <option>Parlantes y audio</option>
        </select>
      </div>

      <div className="flex items-end">
        <button className="btn bg-custome">Buscar</button>
      </div>
    </section>
  );
};

export default CategorySelect;
