export function Button({ children, onClick, variant = "default" }) {
    const baseStyles =
      "px-4 py-2 rounded-lg font-medium transition focus:outline-none";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-400 text-gray-700 hover:bg-gray-200",
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  