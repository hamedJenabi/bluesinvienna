import styles from "./Heading.module.scss";
import React from "react";
import classNames from "classnames";

const Heading = React.forwardRef(
  (
    {
      as,
      children,
      size,
      noSpacing,
      notResponsive,
      className,
      align,
      theme = "default",
      ...props
    },
    ref
  ) => {
    const Element = {
      as: as || size,
    };
    return (
      <Element.as
        ref={ref}
        className={classNames(
          styles.heading,
          className,
          styles[size],
          styles[theme],
          styles[align],
          {
            [styles.noSpacing]: noSpacing,
            [styles.notResponsive]: notResponsive,
          }
        )}
        children={children || null}
        {...props}
      />
    );
  }
);

export default Heading;
