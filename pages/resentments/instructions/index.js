import { Box, Button } from "grommet";
import { useRouter } from "next/router";

export default function Instructions() {
  const router = useRouter();
  return (
    <Box fill align="center">
      <h1>Resentments</h1>
      <p>Let's start with the Resentments table</p>
      <h2>Columns</h2>
      <ol>
        <li>
          In dealing with resentments, we put them on paper. We listed people,
          institutions, or principles with whom we were angry.
        </li>
        <li>We asked ourselves why we were angry.</li>
        <li>
          On our grudge list, we set opposite each name our injuries. Was it our
          self-esteem, our security, our ambitions, our personal or sex
          relations which had been terfered with?
        </li>
        <li>
          Referring to our list again, putting out of our minds the wrongs
          others had done, we resolutely looked at our own mistakes. Where had
          we been selfish, dishonest, self-seeking, frightened, or
          inconsiderate?
        </li>
      </ol>
      <p>
        Reading from the left, we now see the resentment (COLUMN1) the cause
        (COLUMN 2) the part of self that was affected (COLUMN 3) and the exact
        nature of the defect within us that allowed the resentment to surface
        and block us from our Higher Power's will (COLUMN 4).
      </p>
      <Button
        primary
        size="large"
        label="Next"
        onClick={() => {
          router.push("/resentments/column/one");
        }}
      />
    </Box>
  );
}
