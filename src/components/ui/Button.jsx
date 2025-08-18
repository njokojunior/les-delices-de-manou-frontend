import clsx from "clsx";


const Button = ({
  variant = "violet",
  shape = "rounded",
  href,
  onClick,
  type = "button",
  children,
  className = "",
}) => {
  const colorVariants = {
    none: "bg-transparent",
    violet: "bg-violet-600 text-violet-100 hover:bg-violet-500",
    pink: "bg-pink-600 text-pink-100 hover:bg-pink-500",
    amber: "bg-amber-600 text-amber-100 hover:bg-amber-500",
    emerald: "bg-emerald-600 text-emerald-100 hover:bg-emerald-500",
    rose: "bg-rose-600 text-rose-100 hover:bg-rose-500",
    red: "bg-red-600 text-red-100 hover:bg-red-500",
    blue: "bg-blue-600 text-blue-100 hover:bg-blue-500",
  };

  const shapeVariants = {
    rounded: "rounded-full",
    square: "rounded-none",
    pill: "rounded-lg",
  };

  const baseStyles =
    "inline-block transition-all font-medium shadow hover:shadow-md focus:outline-none focus:ring-2 focus-ring-offset-2 text-xs py-2 px-3 md:text-base  lg:text-lg lg:py-3 lg:px-6";

  const classes = clsx(
    baseStyles,
    colorVariants[variant],
    shapeVariants[shape],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
