import React from "react";

const Button = ({ type = "primary", children, onClick }) => {
    const baseStyle =
        "text-xl py-5 px-10 rounded-full transition-all duration-300";

    const styles = {
        primary:
            "bg-[#6CAF5D] text-white hover:bg-[#5aa24e] hover:scale-105",
        secondary:
            "bg-white text-[#6CAF5D] hover:bg-[#f4f4f4] hover:scale-105",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${styles[type]}`}
        >
            {children}
        </button>
    );
};

export default Button;

