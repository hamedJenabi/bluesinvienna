import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Drawer from "./Drawer/Drawer";
import useMedia from "use-media";
import Link from "next/link";

export default function Header({ title, menuItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [titleShown, setTitleShown] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  let lastScrollTop = 0;
  const router = useRouter();
  const isMobile = useMedia({ maxWidth: "768px" });

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.addEventListener("scroll", headerColorChange);

    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  }, []);
  const headerColorChange = () => {
    window.pageYOffset > 0 ? setShadow(true) : setShadow(false);
    console.log("window.pageYOffset", window.pageYOffset);
    if (window.pageYOffset > 320) {
      setTitleShown(true);
    }
    if (window.pageYOffset < 320) {
      setTitleShown(false);
    }
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  };
  return (
    <div
      className={classNames(styles.container, {
        [styles.visible]: shadow,
        [styles.unfix]: scrollState,
        [styles.fix]: !scrollState,
      })}
    >
      <div className={styles.menuItems}>
        <p
          className={classNames(styles.title, {
            [styles.visibleTitle]: titleShown,
          })}
        >
          {title}
        </p>

        <div className={styles.linkWrapper}>
          {!isMobile &&
            menuItems.map(({ title, link }) => (
              <Link key={title} href={link} className={styles.menuItem}>
                {title}
              </Link>
            ))}
          {isMobile && <Drawer menuItems={menuItems} />}
        </div>
      </div>
    </div>
  );
}
