import React from "react";
// import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return <div className="text-center m-4 p-12">{children}</div>;
};

export default Layout;
