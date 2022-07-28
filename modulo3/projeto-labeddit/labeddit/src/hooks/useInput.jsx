import { useState } from "react";
import { CustomTextField } from "../components/styledInputs";

export default function useInput(properties) {
  const [value, setValue] = useState("");
  const input = (
    <CustomTextField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...properties}
    />
  );

  return [value, input];
}
