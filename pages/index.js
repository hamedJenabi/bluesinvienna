/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Teaser from "../components/Teaser/Teaser";
import EventCard from "../components/EventCard/EventCard";
import Heading from "../components/Heading/Heading";
import useMedia from "use-media";
import { GraphQLClient } from "graphql-request";

// const events = [
//   {
//     image: "/vsb.png",
//     title: "Vienna Sugar Blues",
//     content:
//       "Vienna Sugar Blues brings 2 days of Blues classes, 5 parties, more than 4 live bands, and lots of #BluesLove. Teacher line-up: </br>Bibi,</br>Dara,</br>Ioanna,</br>Alex",
//     link: "https://viennasugarblues.com",
//   },
//   {
//     image:
//       "https://www.bluesfever.eu/wp-content/uploads/2020/12/Bluesfever_facebook_website_2021.png",
//     title: "Blues Fever Festival",
//     content:
//       "our vision for blues fever is to have a weekend full of social dancing, high-level classes, panel talks about blues, master classes and competitions. for this to happen, we will have 8 amazing teachers, 5 parties, 5 live bands and lots of #blueslove </br></br>",
//     link: "https://bluesfever.eu",
//   },
// ];
export default function Home({ socials, events }) {
  const isMobile = useMedia({ maxWidth: "768px" });
  const center = {
    lat: 48.214804075824105,
    lng: 16.36558591961406,
  };
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          id="et-builder-googlefonts-cached-css"
          href="https://fonts.googleapis.com/css?family=Actor:regular|Poiret+One:regular|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=latin,cyrillic,latin-ext,cyrillic-ext,vietnamese&amp;display=swap"
          type="text/css"
          media="all"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/logo.jpeg" />
        <meta name="title" content="Blues in Vienna" />
        <meta
          name="description"
          content="All you need to know about dancing blues in Vienna"
        />
        <meta property="og:image" content="/bluesinvienna.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluesinvienna.com/" />
        <meta property="og:title" content="Blues in Vienna" />
        <meta
          property="og:description"
          content="All you need to know about dancing blues in Vienna"
        />
        <meta property="og:image" content="/logo.png" />
        <link
          rel="stylesheet"
          id="et-builder-googlefonts-cached-css"
          href="https://fonts.googleapis.com/css?family=Actor:regular|Poiret+One:regular|Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=latin,cyrillic,latin-ext,cyrillic-ext,vietnamese&amp;display=swap"
          type="text/css"
          media="all"
        />
      </Head>
      <Header
        title="BLUES IN VIENNA"
        menuItems={[
          { title: "Home", link: "/" },
          { title: "Classes", link: "/classes" },
          { title: "Festivals", link: "#Festivals" },
        ]}
      />
      <main className={styles.main}>
        <Teaser
          isZebra
          image="/bluesinvienna.jpeg"
          title="BLUES IN VIENNA"
          content="All you want to know about blues dancing in Vienna </br> Our very first blues class after all this in online. "
          button="Check it out here"
          link="/classes"
        />
        <Teaser
          isZebra
          isRevered
          title="Classes"
          image="/bluesinvienna.jpeg"
          content="Click here for more information about our classes"
          link="/classes"
          button="More info"
        />
        <Teaser
          isZebra
          title="Parties"
          image={socials[0].image.url}
          content={socials[0].detail.html}
          link={socials[0].link}
          button="To Facebook Page"
        />
        <div className={styles.blues}>
          <h1
            id="blues"
            style={{
              padding: "26px 0",
              width: "100%",
              textAlign: "center",
            }}
          >
            What is Blues?
          </h1>
          <iframe
            width={isMobile ? "100%" : "760"}
            height={isMobile ? "300" : "400"}
            src="https://www.youtube.com/embed/W4GtVlnHZeE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h1 id="Festivals" style={{ paddingTop: "26px" }}>
          Festivals in Vienna
        </h1>
        <Container>
          <div className={styles.eventWrapper}>
            {events &&
              events.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
          </div>
        </Container>
        {/* <h1 id="About us" style={{ paddingTop: "26px" }}>
          About Blues in Vienna
        </h1>
        <Teaser
          isZebra
          isRevered
          title="Classes"
          image="/bluesinvienna.jpeg"
          content="Next Blues classes starts on March 15th. With 2 levels"
          link="https://docs.google.com/forms/d/e/1FAIpQLScFtadEB9BUq3GnwHlymZSIQxCZjZvTglKDETaHHqdM-y5DlA/viewform"
          button="register here"
        /> */}
      </main>

      <footer className={styles.footer}>
        <a href="https://hamedjenabi.me">Website with Love: Hamed</a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle7e622f0ttl01t604hc45ii/master"
  );

  const { socials } = await graphcms.request(
    `
    {
      socials {
        id
        title
        detail
        {
          html
        }
        link
        image {
          url
        }
      }
    }
	  `
  );
  const { festivals } = await graphcms.request(
    `
    {
      festivals {
        id
        title
        detail
        {
          html
        }
        link
        image {
          url
        }
      }
    }
	  `
  );

  return {
    props: {
      socials,
      events: festivals,
    },
  };
}
