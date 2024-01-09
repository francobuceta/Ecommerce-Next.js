const Loader = ({ checkout }) => {
  return (
    <div
      className={`border-dashed rounded-full animate-spin border-custome-primary
      ${checkout ? "w-20 h-20 border-[12px]" : "w-10 h-10 border-4"}`}
    ></div>
  );
};

export default Loader;
