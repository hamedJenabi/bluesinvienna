/* eslint-disable @next/next/no-page-custom-font */

import styles from "./classes.module.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import { GraphQLClient } from "graphql-request";

import Link from "next/link";

export default function Classes({
  classes,
  title = "Blues Classes in Vienna",
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
          {classes.map((classItem) => {
            return (
              <div className={styles.card}>
                <Card>
                  <h2>{classItem.title}</h2>
                  <div
                    className={styles.detail}
                    dangerouslySetInnerHTML={{ __html: classItem.detail.html }}
                  ></div>
                  <div style={{ marginTop: "auto" }}>
                    <a target="_blank" href={classItem.link}>
                      <button id="register" className={styles.button}>
                        Register here
                      </button>
                    </a>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
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

  const { classes } = await graphcms.request(
    `
    {
      classes {
        id
        title
        detail
        {
          html
        }
        link
      }
    }
	  `
  );

  return {
    props: {
      classes,
    },
  };
}
