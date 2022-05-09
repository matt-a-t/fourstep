import { Box, Button } from "grommet";
import { useRouter } from "next/router";

export default function Instructions(props) {
  const router = useRouter();
  return (
    <Box fill align="center">
      <h1>Fourth Step</h1>
      <p>
        This app will collect your responses and walk you through creating 3
        tables to work through the fourth step of a 12 step program. All data is
        saved locally in your browser, meaning none of it is sent anywhere or
        stored anywhere your normal web traffic isn't. We will soon be making it
        possible to export the tables to share and backup.
      </p>
      <p>The three categories of the tables we create will be:</p>
      <ul>
        <li>Resentments</li>
        <li>Fears</li>
        <li>Sex Conduct</li>
      </ul>
      <p>
        Each table will have 4 "columns", with varying amounts of information in
        each. These questions will guide you through a fearless and searching
        moral inventory of yourself if you are thorough.
      </p>

      <Button
        primary
        size="large"
        label="Begin"
        onClick={() => {
          router.push("/resentments/instructions");
        }}
      />
    </Box>
  );
}
