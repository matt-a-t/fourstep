import { Header, Button, Main, Box, Footer } from "grommet";
import { Home } from "grommet-icons";
import { useRouter } from "next/router";

const HEADER_HEIGHT = "64px";
const FOOTER_HEIGHT = "24px";

function Layout(props) {
  const router = useRouter();
  return (
    <Box fill direction="column">
      <Header
        background="brand"
        pad={{ horizontal: "small" }}
        height={HEADER_HEIGHT}
      >
        <Button
          icon={<Home />}
          a11yTitle="Home"
          onClick={() => {
            router.push("/");
          }}
        />
        <h1>Fourth Step</h1>
      </Header>

      <Main
        height={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT}) !important`}
        pad="small"
      >
        {props.children}
      </Main>

      <Footer justify="center" height={FOOTER_HEIGHT}>
        <img
          src="/favicon.ico"
          style={{ height: "16px", margin: "4px" }}
          alt="Fourth Step Logo"
        />
      </Footer>
    </Box>
  );
}

export default Layout;
