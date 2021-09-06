/* eslint-disable @next/next/no-page-custom-font */

import styles from "./classes.module.scss";
import Header from "../../components/Header/Header";

import Link from "next/link";

export default function Classes({
  title = "Blues Classes in Vienna (vaccinated only) ",
  description = `Please bring your <strong>vaccination pass</strong> at the first class. <br>
  4 weeks of blues dance classes <br>
  Price: €60 (Both classes €100)<br>
  Blues refreshment: <br>
  18:15 - 19:25 <br>
  Beginner Blues Class: <br>
  19:35 - 20:45 <br>
  Where? TBA`,
}) {
  return (
    <div>
      <Header
        menuItems={[
          { title: "Home", link: "/" },
          { title: "Register", link: "#register" },
        ]}
      />
      <div className={styles.container}>
        <img className={styles.image} src="/bluesinvienna.jpeg" />
        <div className={styles.contentWrapper}>
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}

          <p style={{ margin: "5px 0 0 0" }}>21.09.2021</p>
          <p style={{ margin: "5px 0 0 0" }}>29.09.2021</p>
          <p style={{ margin: "5px 0 0 0" }}>05.10.2021</p>
          <p style={{ margin: "5px 0 0 0" }}>12.10.2021</p>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScFtadEB9BUq3GnwHlymZSIQxCZjZvTglKDETaHHqdM-y5DlA/viewform">
            <button id="register" className={styles.button}>
              Regiter here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
