import { Link } from "react-router-dom";

function Button({
  variant = "default",
  color = "primary",
  size = "medium",
  to,
  onClick,
  ariaLabel,
  children,
}) {
  let className =
    "fvc rounded-lg font-semibold tracking-wide shadow-slate-400/50 bg-transparent ";

  // variant styles
  const variants = {
    default: "",
    outline: "outline outline-1",
    ghost: "hover:bg-opacity-10 dark:hover:bg-opacity-10",
    link: "underline hover:bg-opacity-10 dark:hover:bg-opacity-10",
  };
  className += variants[variant] + " ";

  // color styles
  const colors = {
    primary: {
      default:
        "bg-violet-600 text-slate-50 hover:bg-violet-800   dark:bg-violet-400 dark:text-slate-950 dark:hover:bg-violet-200",
      outline:
        "outline-violet-600 text-violet-600 hover:outline-violet-800 hover:text-violet-800 hover:bg-violet-200 dark:outline-violet-400 dark:text-violet-400 dark:hover:outline-violet-200 dark:hover:text-violet-200 dark:hover:bg-violet-800",
      ghost:
        "text-violet-600 hover:bg-violet-600 dark:text-violet-400 dark:hover:bg-violet-400",
      link: "text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200",
    },
    secondary: {
      default: "bg-teal-600 text-slate-50 dark:bg-teal-400 dark:text-slate-950",
      outline:
        "outline-teal-600 text-teal-600 hover:outline-teal-600 hover:text-teal-800 hover:bg-teal-200 dark:outline-teal-400 dark:text-teal-400 dark:hover:outline-teal-400 dark:hover:text-teal-200 dark:hover:bg-teal-800",
      ghost:
        "text-teal-600 hover:bg-teal-600 dark:text-teal-400 dark:hover:bg-teal-400",
      link: "text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200",
    },
    success: {
      default:
        "bg-green-600 text-slate-50 dark:bg-green-400 dark:text-slate-950",
      outline:
        "outline-green-600 text-green-600 hover:outline-green-600 hover:text-green-800 hover:bg-green-200 dark:outline-green-400 dark:text-green-400 dark:hover:outline-green-400 dark:hover:text-green-200 dark:hover:bg-green-800",
      ghost:
        "text-green-600 hover:bg-green-600 dark:text-green-400 dark:hover:bg-green-400",
      link: "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200",
    },
    danger: {
      default: "bg-red-600 text-slate-50 dark:bg-red-400 dark:text-slate-950",
      outline:
        "outline-red-600 text-red-600 hover:outline-red-600 hover:text-red-800 hover:bg-red-200 dark:outline-red-400 dark:text-red-400 dark:hover:outline-red-400 dark:hover:text-red-200 dark:hover:bg-red-800",
      ghost:
        "text-red-600 hover:bg-red-600 dark:text-red-400 dark:hover:bg-red-400",
      link: "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200",
    },
  };
  className += colors[color][variant] + " ";

  // size styles
  const sizes = {
    small: "px-2 py-1 sm:text-sm shadow-sm text-xs",
    medium: "px-3 py-1.5 md:text-base shadow text-sm",
    large: "px-4 py-2 lg:text-lg shadow-lg text-base",
    xl: "px-6 py-3 text-xl shadow-xl",
  };
  className += sizes[size] + " ";

  const Element = to ? Link : "button";

  return (
    <Element
      to={to}
      className={className}
      onClick={onClick}
      role="button"
      aria-label={ariaLabel}
    >
      {children}
    </Element>
  );
}

export default Button;
