import { Header, Button, Main, Box, Footer } from "grommet";

function Layout(props) {
  return (
    <Box fill direction="column">
      <Header background="brand" pad={{ horizontal: "small" }}>
        <Button label="o" />
        <h1>Fourth Step</h1>
      </Header>

      <Main pad="small">{props.children}</Main>

      <Footer justify="center">
        <span>
          Made with{" "}
          <img
            src="/netliheart.svg"
            style={{ height: "20px", margin: "4px" }}
            alt="Netlify Logo"
          />{" "}
          for you
        </span>
      </Footer>
    </Box>
  );
}

export default Layout;
