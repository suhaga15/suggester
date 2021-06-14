import React from "react";
// import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex-col text-center m-4 p-12 items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
