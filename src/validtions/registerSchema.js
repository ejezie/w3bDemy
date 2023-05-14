const validation = (fullname, email, password) => {
  const errors = {
    fullname: "",
    email: "",
    password: ""
  };
  if (!fullname) {
    errors.fullname = "First Name is required";
  } else if (fullname.length < 3) {
    errors.fullname = "Invalid First Name";
  }
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email or email";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
  ) {
    errors.password =
      "Weak Password. Password must have:, At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight in length";
  } else if (password.length > 25) {
    errors.password = "Password length exceeded";
  }

  return errors;
};

export default validation;
