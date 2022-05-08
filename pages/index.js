import { Box, Button } from "grommet";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Box fill align="center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Fourth Step Guide</h1>
      <p>
        Based Upon the Book <u>Alcoholics Anonymous</u>
      </p>
      <p>Third Edition, Pages 64 to 71</p>
      <p>Form designed by Joe M. & Charlie P.</p>
      <p>Digitized by Matt A.</p>
      <Button
        primary
        margin="large"
        onClick={() => {
          router.push("/app-instructions");
        }}
        label="Start"
        size="large"
      />
    </Box>
  );
}
