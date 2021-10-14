/* eslint-disable @next/next/no-page-custom-font */

import styles from "./classes.module.scss";
import Header from "../../components/Header/Header";

import Link from "next/link";

export default function Classes({
  title = "Blues Classes in Vienna (vaccinated only) ",
  description = `Please bring your <strong>vaccination pass</strong> at the first class. <br>
  4 weeks of blues dance classes <br>
  Price: €60 <br>
  Level 2: <br>
  18:15 - 19:25 <br>
  Level 1: <br>
  19:35 - 20:45 <br>
  Where: Azul Bar  <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5317.280836557739!2d16.37942232645875!3d48.213541651189246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a1382f975927df9!2sAzul%20Bar!5e0!3m2!1sen!2sat!4v1631662404285!5m2!1sen!2sat" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
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

          <p style={{ margin: "5px 0 0 0" }}>02.11.2021</p>
          <p style={{ margin: "5px 0 0 0" }}>09.11.2021</p>
          <p style={{ margin: "5px 0 0 0" }}>16.11.2021</p>
          <p style={{ margin: "5px 0 20px 0" }}>23.11.2021</p>

          <Link href="https://forms.gle/AisjT5aa8awxLavU9">
            <button id="register" className={styles.button}>
              Register here
            </button>
          </Link>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
