export const formCheck = (email, password) => {
  const Isemailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const IspasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
  if (!Isemailvalid) {
    return "Enter Valid Email";
  }
  if (!IspasswordValid) {
    return "Enter Valid Password";
  }

  return null;
};
