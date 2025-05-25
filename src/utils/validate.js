export const validateData = (email, password, username) => {
  const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  console.log("Password being validated:", password);
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
  console.log("Password validation result:", validPassword);
  const validUsername = username && /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(username);

  if (!validEmail) return "E-mail Id is not valid";
  if (!validPassword) return "Password is not valid";
  if (username && !validUsername)
    return "Username must contain letters, numbers, and hyphens.";

  return null;
};