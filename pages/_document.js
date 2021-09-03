import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
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
          <link rel="icon" href="/icon.png" />
          <meta name="title" content="Blues in Vienna" />
          <meta
            name="description"
            content="All you need to know about dancing blues in Vienna"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bluesfever.eu/" />
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

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
