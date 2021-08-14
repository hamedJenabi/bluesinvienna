import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blues in Vinnea</title>
        <meta
          name="description"
          content="All you need about blues dance in vienna"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          id="et-builder-googlefonts-cached-css"
          href="https://fonts.googleapis.com/css?family=Actor:regular|Poiret+One:regular|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=latin,cyrillic,latin-ext,cyrillic-ext,vietnamese&amp;display=swap"
          type="text/css"
          media="all"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <img className={styles.img} src="/bluesinvienna.jpeg" />
        <h1 className={styles.title}>BLUES IN VIENNA</h1>
        <h1 className={styles.title}>All about blues dance in Vienna</h1>
        <h2 className={styles.description}>We are working on it ;) </h2>
      </main>
    </div>
  );
}
