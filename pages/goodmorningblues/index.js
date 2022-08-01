/* eslint-disable @next/next/no-page-custom-font */

import styles from "./goodmorningblues.module.scss";
import Header from "../../components/Header/Header";
import useMedia from "use-media";
import Link from "next/link";
import Head from "next/head";

export default function Workshop({
  title = "Good Morning Blues with Lotte & Hamed ",
  description = `
  <br>
  <br>
  <strong>Venues: </strong><br>
  PARTY: 
  Friday at 20:30 <br>
  at Azul Bar <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5317.280836557739!2d16.37942232645875!3d48.213541651189246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a1382f975927df9!2sAzul%20Bar!5e0!3m2!1sen!2sat!4v1631662404285!5m2!1sen!2sat" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"<br> 
  <br>
  <br>
  SATURDAY house party 19:00 - 00:00 <br>
  Where: info will be sent per email :)  <br>
  <br>

  Classes: <br>
  TBA  <br>
  <br>
  Sunday Picknick 16:00 - 20:00 <br>
  Where: Romawiese <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.8485567702957!2d16.40336870199208!3d48.24765749097767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d068ad1af2987%3A0x34398ae43bd564ea!2sRomawiese!5e0!3m2!1sen!2snl!4v1656366809526!5m2!1sen!2snl"width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <br>
  <br>

    <br>`,
}) {
  const isMobile = useMedia({ maxWidth: "468px" });
  const subtitle = `
  <strong>With Lotte & Hamed</strong><br>
<strong>05.08 - 07.08.2022</strong> <br><br>
 4 hours of blues dance classes <br>
And 2 parties with live music <br>
 <br>
 <strong>Level: </strong> <br>
 Intermediate:  <br><br>
 <strong>Price: €65</strong> <br>`;
  return (
    <div>
      <Head>
        <meta property="og:image" content="/lotte-hamed.jpeg" />
      </Head>
      <Header
        title="Blues in Vienna"
        menuItems={[{ title: "Home", link: "/" }]}
      />
      <div className={styles.container}>
        <img className={styles.image} src="/lotte-hamed.jpeg" />
        <div className={styles.contentWrapper}>
          <h2>Good Morning Blues</h2>
          {subtitle && <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>}

          <Link target="_blank" href="https://forms.gle/ew2v5oNKJBEsauty5">
            <button id="register" className={styles.button}>
              Register here
            </button>
          </Link>
          <div>
            <p style={{ margin: "10px 0", fontSize: "18px" }}>Classes:</p>
            {/* <img className={styles.schedule} src="/schedule-gm.png" /> */}
            <p style={{ margin: "5px 0" }}>Satruday: 13:00 - 17:00</p>
          </div>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
