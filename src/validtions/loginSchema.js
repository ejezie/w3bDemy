const validation = ( email, password ) => {
  const errors = {
    email: "",
    password: ""
  };
  if (email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default validation;
