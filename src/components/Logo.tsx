import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-primary-700 h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-primary-800">
        AR Legal Associates
      </h1>
    </div>
  );
};

export default Logo;
