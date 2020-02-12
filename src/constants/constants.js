export const InputErrors = {
  patternMismatch: {
    attr: "pattern",
    errorMsg: "Must match the following pattern"
  },
  tooShort: {
    attr: "minLength",
    errorMsg: "Error: Must be a min length of "
  },
  typeMismatch: {
    email: {
      errorMsg: "Must match pattern example@mail.com"
    },
    url: {
      errorMsg: "Must match url pattern"
    }
  },
  valueMissing: {
    errorMsg: "Must enter required value"
  }
};
