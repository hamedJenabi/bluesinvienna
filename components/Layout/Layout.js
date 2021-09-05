import styles from "./Layout.module.scss";
import React from "react";
import classNames from "classnames";

const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
export default Layout;
