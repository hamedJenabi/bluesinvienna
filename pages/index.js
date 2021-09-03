/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Teaser from "../components/Teaser/Teaser";
import EventCard from "../components/EventCard/EventCard";

const events = [
  {
    image: "/vsb.png",
    title: "Vienna Sugar Blues",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://viennasugarblues.com",
  },
  {
    image:
      "https://www.bluesfever.eu/wp-content/uploads/2020/12/Bluesfever_facebook_website_2021.png",
    title: "Blues Fever Festival",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://bluesfever.eu",
  },
];
export default function Home() {
  const center = {
    lat: 48.214804075824105,
    lng: 16.36558591961406,
  };
  return (
    <div className={styles.container}>
      <Header title="BLUES IN VIENNA" />
      <main className={styles.main}>
        <h1 style={{ textAlign: "center" }}>
          WEBSITE IS UNDER CONSTRUCTION... MORE INFO COMING SOOOOOON
        </h1>

        <Teaser
          isZebra
          image="/bluesinvienna.jpeg"
          title="BLUES IN VIENNA"
          content="All you want to know about blues dancing in Vienna"
          button="Take the first class"
          link="https://docs.google.com/forms/d/e/1FAIpQLScFtadEB9BUq3GnwHlymZSIQxCZjZvTglKDETaHHqdM-y5DlA/viewform"
        />
        <Teaser
          isZebra
          isRevered
          title="Classes"
          image="/bluesinvienna.jpeg"
          content="Next Blues classes starts on September 21st. With 2 levels"
          link="https://docs.google.com/forms/d/e/1FAIpQLScFtadEB9BUq3GnwHlymZSIQxCZjZvTglKDETaHHqdM-y5DlA/viewform"
          button="register here"
        />
        <h1 id="Festivals" style={{ paddingTop: "26px" }}>
          Festivals in Vienna
        </h1>
        <div className={styles.eventWrapper}>
          {events &&
            events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://hamedjenabi.me">Website with Love: Hamed</a>
      </footer>
    </div>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsWithSlug(preview);
//   console.log("allPosts", allPosts);
//   return {
//     props: { allPosts, preview },
//   };
// }
