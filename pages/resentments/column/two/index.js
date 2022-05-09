import { useState } from "react";
import { Box, Button, Form, Tag, TextInput } from "grommet";
import { useRouter } from "next/router";
import ls from "local-storage";

export default function ResentmentsColumnTwo() {
  const colOne = ls.get("resentments-column-one") || [];
  const empty = { input: "" };
  const [formValue, setFormValue] = useState(empty);
  const initialColumn = colOne.map((c) => ({ name: c, colTwo: "" }));
  const [list, setList] = useState(
    ls.get("resentments-column-two") || initialColumn
  );
  const [done, setDone] = useState(false);

  const [currentIdx, setCurrentIdx] = useState(0);
  const router = useRouter();

  function submitForm(e) {
    next(e.value.input);
  }

  function next(value) {
    const newList = [...list];
    list[currentIdx].colTwo = value;
    setList(newList);
    ls.set("resentments-column-two", newList);

    const newIdx = currentIdx + 1;
    if (newIdx === colOne.length) {
      setDone(true);
    } else {
      setCurrentIdx(newIdx);
      setFormValue(empty);
    }
  }

  return (
    <Box>
      <h1>Resentments - Col. 2</h1>
      <p>We asked ourselves why we were angry.</p>

      {!done ? (
        <>
          <p>
            <b>{colOne[currentIdx]}</b> makes me angry because...
          </p>

          <Form
            onSubmit={submitForm}
            value={formValue}
            onChange={(next) => setFormValue(next)}
          >
            <TextInput name="input" />
            <Button
              primary
              label="Enter"
              margin={{ vertical: "small" }}
              fill="horizontal"
              type="submit"
            />
          </Form>
        </>
      ) : (
        <>
          <p>Congrats you're done</p>
          <Button
            label="Next Column"
            margin="large"
            onClick={() => {
              router.push("/resentments/column/three");
            }}
          />
        </>
      )}
      <Box direction="row" wrap pad="medium">
        {colOne.map((_, i) => {
          // default
          let color = "neutral-4";
          // current
          if (i === currentIdx) {
            color = "neutral-3";
          } else if (!!list[i].colTwo) {
            // done
            color = "neutral-1";
          }

          return (
            <Tag
              value={colOne[i]}
              key={i}
              margin="small"
              color={color}
              onClick={() => {
                setCurrentIdx(i);
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
