/* eslint-disable @next/next/no-page-custom-font */

import styles from "./goodmorningblues.module.scss";
import Header from "../../components/Header/Header";
import useMedia from "use-media";
import Link from "next/link";

export default function Workshop({
  title = "Blues Classes in Vienna (vaccinated/Recovered only) ",
  description = `
  <strong>06.03 - 08.03.2022</strong> <br>
  3 hours of blues/slow swing dance classes <br>
  And 2 parties with live music <br>
   <br>
  <strong>With Jenna & Dara</strong>
  <br>
  <br>
  Price: €70 <br>
  *** Please bring your <strong>vaccination/Recovered pass</strong>. *** <br>
  <br>
  <br>
  <strong>Schedule: </strong><br>
  PARTY: 
  Friday & Saturday at 20:00 <br>
  at Azul Bar <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5317.280836557739!2d16.37942232645875!3d48.213541651189246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a1382f975927df9!2sAzul%20Bar!5e0!3m2!1sen!2sat!4v1631662404285!5m2!1sen!2sat" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"<br> 
  <br>
  Class: <br>
  Saturday  13:00 - 16:00 <br>
  Level Intermediate and higher: <br>
  Where: Some Like it Hot Ballroom  <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9097390712677!2d16.333537415334074!3d48.189090555551196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da818c357abbf%3A0xa307951cf682c3b8!2sSome%20Like%20It%20Hot*21!5e0!3m2!1sen!2sat!4v1643820911703!5m2!1sen!2sat" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"<br> 
  <br>
  <br>
    <br>`,
}) {
  const isMobile = useMedia({ maxWidth: "468px" });

  return (
    <div>
      <Header
        title="Blues in Veinna"
        menuItems={[{ title: "Home", link: "/" }]}
      />
      <div className={styles.container}>
        <img className={styles.image} src="/goodmorningblues.gif" />
        <div className={styles.contentWrapper}>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
        <div style={{ paddingBottom: "50px" }}>
          <Link href="https://forms.gle/rKi1z96hDN4Cmy1eA">
            <button id="register" className={styles.button}>
              Register here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}