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

export const ProductDetailSkeleton = () => {
  return (
    <>
      <div className="w-full animate-pulse">
        <div className="w-full max-w-[550px] h-[300px] md:h-[550px] rounded-md bg-gray-600"></div>
      </div>

      <div className="w-full animate-pulse">
        <h2 className="w-full max-w-[550px] h-[40px] bg-gray-600 rounded-xl"></h2>
        <p className="w-full max-w-[550px] h-[90px] mt-10 bg-gray-600 rounded-xl"></p>
        <p className="w-full max-w-[90px] h-[35px] mt-10 bg-gray-600 rounded-xl"></p>
        <p className="w-full max-w-[230px] h-[35px] mt-5 bg-gray-600 rounded-xl"></p>

        <div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:gap-10 mt-10">
            <div className="bg-gray-600 w-10 h-10 p-2 rounded-md flex justify-center">
            </div>
            <div className="flex gap-2">
              <div
                className="border rounded-md w-20 h-[34px] bg-gray-600 border-none">
              </div>
              <div
                className="border rounded-md w-20 h-[34px] bg-gray-600 border-none">
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10">
          <div className="border border-none rounded-md w-52 h-[34px] p-2 bg-gray-600"></div>
          <div className="border border-none rounded-md w-52 h-[34px] p-2 bg-gray-600"></div>
        </div>
      </div>
    </>
  );
};
