export const ProductsSkeleton = () => {
  return (
    <>
      {[...Array(12)].map((elem, index) => {
        return (
          <div
            className="card card-compact w-72 h-[400px] bg-base-100 shadow-xl animate-pulse"
            key={index}
          >
            <figure className="relative p-10 bg-gray-600">
              <div className="w-full max-w-[24px] h-[24px] absolute top-2 left-2 rounded-md"></div>
              <div className="w-full h-[160px] rounded-md"></div>
            </figure>

            <div className="card-body rounded-b-2xl gap-0">
              <h3 className="card-title bg-gray-600 select-none w-full max-w-[256px] h-[28px] rounded-full"></h3>
              <p className="w-full bg-gray-600 max-w-[256px] h-[20px] rounded-full"></p>
              <span className="w-full bg-gray-600 max-w-[150px] h-[28px] rounded-full mt-2"></span>
              <div className="card-actions justify-end mt-2">
                <div className="w-full max-w-[80px] h-[48px] justify-end bg-gray-600 rounded-md"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
