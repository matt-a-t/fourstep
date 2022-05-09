import { useState } from "react";
import { Box, Button, Form, Tag, TextInput } from "grommet";
import { useRouter } from "next/router";
import ls from "local-storage";

export default function ResentmentsColumnOne() {
  const empty = { input: "" };
  const [formValue, setFormValue] = useState(empty);
  const [list, setList] = useState(ls.get("resentments-column-one") || []);
  const router = useRouter();

  function addToList(value) {
    const newList = [...list, value];
    ls.set("resentments-column-one", newList);
    setList(newList);
  }

  function submitForm(e) {
    addToList(e.value.input);
    setFormValue(empty);
  }

  return (
    <Box fill>
      <h1>Resentments - Col. 1</h1>
      <p>List people, institutions, or principles you are angry at.</p>
      <p>Please be thorough.</p>
      <h2>I'm resentful at...</h2>
      <Form
        onSubmit={submitForm}
        value={formValue}
        onChange={(next) => setFormValue(next)}
      >
        <TextInput name="input" />
        <Button
          primary
          label="Add"
          margin={{ vertical: "small" }}
          fill="horizontal"
          type="submit"
        />
      </Form>

      {list.length > 2 && (
        <Button
          label="Next Column"
          margin="large"
          onClick={() => {
            router.push("/resentments/column/two");
          }}
        />
      )}

      <Box direction="row" wrap pad="medium">
        {list.map((item, index) => {
          return <Tag value={item} key={index} margin="small" />;
        })}
      </Box>
    </Box>
  );
}
