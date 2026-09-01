import { Link } from "react-router";

const LinkButton = ({
  type = "primary",
  children,
  route = "",
  icon: Icon,
  full = false,
}) => {
  const styles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-700 border",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <Link
      to={route}
      className={`
        ${styles[type]}
        ${full ? "w-full justify-center" : ""}
        inline-flex items-center justify-center gap-2
        px-5 py-3 rounded-xl
        font-medium transition-all duration-200
      `}
    >
      {Icon && <Icon className="text-sm" />}
      {children}
    </Link>
  );
};

export default LinkButton;