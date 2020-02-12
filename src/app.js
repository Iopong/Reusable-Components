import React from "react";
import Input from "./components/Input";

function App(props) {
  const absFilePathRegex = "^(/[a-zA-Z0-9./]{1,})([a-zA-Z0-9./\\s])*$";
  const descRegex = "^([-.',A-Za-z0-9_]{2,})([-.',A-Za-z0-9_\\s])*$";

  return (
    <div className="Form">
      <Input
        type={"email"}
        id={"email"}
        placeholder={"Email"}
        required={true}
        autoComplete={"off"}
        position={"top"}
      />
      <Input
        type={"text"}
        pattern={absFilePathRegex}
        placeholder={"File Path"}
        required={true}
        autoComplete={"off"}
        position={"bottom"}
      />
      <Input
        type={"text"}
        pattern={descRegex}
        placeholder={"Description"}
        required={true}
        autoComplete={"off"}
        position={"bottom"}
      />
    </div>
  );
}

export default App;
