import { Link } from "react-router-dom";

function Button({
  variant = "default",
  color = "primary",
  size = "medium",
  to,
  onClick,
  children,
}) {
  let className =
    "flex items-center rounded-lg font-semibold  transition-all duration-200 ";

  // variant styles
  const variants = {
    default: "",
    outline: "bg-transparent outline outline-1",
    ghost: "bg-transparent hover:bg-opacity-10",
    link: "bg-transparent underline hover:bg-opacity-10",
  };
  className += variants[variant] + " ";

  // color styles
  const colors = {
    primary: {
      default: "bg-violet-600 text-slate-50 hover:bg-violet-800",
      outline:
        "outline-violet-600 text-violet-600 hover:outline-violet-800 hover:text-violet-800 hover:bg-violet-200",
      ghost: "text-violet-600 hover:bg-violet-600",
      link: "text-violet-600 hover:text-violet-800",
    },
    secondary: {
      default: "bg-teal-600 text-slate-50",
      outline:
        "outline-teal-600 text-teal-600 hover:outline-teal-600 hover:text-teal-800 hover:bg-teal-200",
      ghost: "text-teal-600 hover:bg-teal-600",
      link: "text-teal-600 hover:text-teal-800",
    },
    success: {
      default: "bg-green-600 text-slate-50",
      outline:
        "outline-green-600 text-green-600 hover:outline-green-600 hover:text-green-800 hover:bg-green-200",
      ghost: "text-green-600 hover:bg-green-600",
      link: "text-green-600 hover:text-green-800",
    },
    danger: {
      default: "bg-red-600 text-slate-50",
      outline:
        "outline-red-600 text-red-600 hover:outline-red-600 hover:text-red-800 hover:bg-red-200",
      ghost: "text-red-600 hover:bg-red-600",
      link: "text-red-600 hover:text-red-800",
    },
  };
  className += colors[color][variant] + " ";

  // size styles
  const sizes = {
    small: "px-2 py-1 text-sm shadow-sm",
    medium: "px-3 py-1.5 text-base shadow",
    large: "px-4 py-2 text-lg shadow-lg",
    xl: "px-6 py-3 text-xl shadow-xl",
  };
  className += sizes[size] + " ";

  const Element = to ? Link : "button";

  return (
    <Element to={to} className={className} onClick={onClick}>
      {children}
    </Element>
  );
}

export default Button;
