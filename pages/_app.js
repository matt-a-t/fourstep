import "@styles/globals.css";
import { Grommet } from "grommet";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function Application({ Component, pageProps }) {
  return (
    <Grommet theme={theme} className="full-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  );
}

export default Application;
