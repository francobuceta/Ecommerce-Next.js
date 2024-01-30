export const PrimaryButton = ({ content, styles, fn }) => {
  return (
    <button
      className={`border border-transparent rounded-md text-black transition-all duration-500 bg-custome-primary 
        hover:shadow-[0_0_10px_0_#BAFF29_inset,_0_0_20px_2px_#BAFF29]
        ${styles}
      `}
      onClick={fn}
    >
      {content}
    </button>
  );
};

export const PrimaryButtonOutline = ({ content, styles, fn }) => {
  return (
    <button
      className={`border border-custome-primary rounded-md text-custome-primary transition-all duration-500 bg-transparent
        hover:shadow-[0_0_10px_0_#BAFF29_inset,_0_0_20px_2px_#BAFF29]
        ${styles}
      `}
      onClick={fn}
    >
      {content}
    </button>
  );
};

export const CardButton = ({ content, styles, fn }) => {
  return (
    <button
      className={`border border-custome-secondary rounded-md text-custome-secondary transition-all duration-500 bg-transparent
        hover:bg-custome-secondary hover:text-custome-primary
        ${styles}
      `}
      onClick={fn}
    >
      {content}
    </button>
  );
};
