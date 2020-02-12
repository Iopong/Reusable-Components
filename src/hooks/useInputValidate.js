import { useState, useEffect } from "react";
import { InputErrors } from "../constants/constants";

function useInputValidate(target) {
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (target) {
      const { validity, type } = target;
      validateInput(validity, type);
    }
  }, [target]);

  const validateInput = (validity, type) => {
    const errors = Object.keys(InputErrors)
      .filter(key => validity[key] !== false)
      .reduce((arr, key) => {
        if (key === "valueMissing") {
          return [...arr, InputErrors.valueMissing.errorMsg];
        } else if (key === "typeMismatch") {
          return [...arr, InputErrors.typeMismatch[type].errorMsg];
        } else {
          return [...arr, InputErrors[key].errorMsg];
        }
      }, []);
    setErrors(errors);
  };

  return errors;
}

export default useInputValidate;
