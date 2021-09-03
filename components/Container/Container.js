import styles from "./Container.module.scss";
import React from "react";
import classNames from "classnames";

const Container = ({ children, isReversed, isZebra }) => (
  <div
    className={classNames(styles.container, {
      [styles.isReversed]: isReversed,
      [styles.isZebra]: isZebra,
    })}
  >
    {children}
  </div>
);
export default Container;
