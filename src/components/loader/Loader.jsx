const Loader = ({ checkout, margin }) => {
  return (
    <div
      className={`border-dashed rounded-full animate-spin border-custome-primary
        ${checkout ? "w-20 h-20 border-[12px]" : "w-10 h-10 border-4"}
        ${margin ? margin : ""}
      `}
    ></div>
  );
};

export default Loader;
