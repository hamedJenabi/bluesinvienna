/* eslint-disable @next/next/no-page-custom-font */

import styles from "./goodmorningblues.module.scss";
import Header from "../../components/Header/Header";
import useMedia from "use-media";
import Link from "next/link";

export default function Workshop({
  title = "Blues Classes in Vienna (vaccinated/Recovered only) ",
  description = `
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
  Sunday Brunch 11:00 - 15:00 <br>
  Where: Cafe Amacord <br>
  <br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.422912953409!2d16.361875415334424!3d48.19846945489741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07846194ca79%3A0xaef663e6759ee18f!2sCaf%C3%A9%20Amacord!5e0!3m2!1sen!2shu!4v1644069806738!5m2!1sen!2shu" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  <br>
  <br>

    <br>`,
}) {
  const isMobile = useMedia({ maxWidth: "468px" });
  const subtitle = `
  <strong>With Jenna & Dara</strong><br>
<strong>04.03 - 06.03.2022</strong> <br>
3 hours of blues/slow swing dance classes <br>
And 2 parties with live music <br>
 <br>
 Price: €70 <br>`;
  return (
    <div>
      <Header
        title="Blues in Vienna"
        menuItems={[{ title: "Home", link: "/" }]}
      />
      <div className={styles.container}>
        <img className={styles.image} src="/goodmorningblues.gif" />
        <div className={styles.contentWrapper}>
          <h2>Good Morning Blues</h2>
          {/* {subtitle && <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>}

          <Link href="https://forms.gle/rKi1z96hDN4Cmy1eA">
            <button disabled id="register" className={styles.button}>
              WE ARE FULLY BOOKED
            </button>
          </Link>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )} */}
          <p>We are cooking up a new blues dance class with a new teachers.</p>
        </div>
      </div>
    </div>
  );
}
