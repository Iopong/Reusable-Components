import React, { useState } from "react";
import useInputValidate from "../hooks/useInputValidate";

function Input(props) {
  const [inputState, setInputState] = useState();
  const errors = useInputValidate(inputState);
  const { position, ...rest } = props;

  const onInput = ({ target }) => {
    setInputState(target);
  };

  return (
    <div className="input">
      <input className="input__field" onInput={e => onInput(e)} {...rest} />
      {errors ? (
        <div className="error">
          <div className="error-icon">
            <i className="fa fa-exclamation-circle" aria-hidden="true" />
          </div>
          <div className={`error-text error-text-${position}`}>
            <ul>
              {errors.map(val => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Input;
