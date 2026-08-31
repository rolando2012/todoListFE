const Button = ({
  type = "primary",
  children,
  icon: Icon,
  full = false,
  htmlType = "button",
  onClick,
  disabled = false,
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
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles[type]}
        ${full ? "w-full justify-center" : ""}
        inline-flex items-center justify-center gap-2
        px-5 py-3 rounded-xl cursor-pointer
        font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {Icon && <Icon className="text-sm" />}
      {children}
    </button>
  );
};

export default Button;