const PasswordPatterns = () => {

  const patterns = [
    { tester: /^.{12,}$/, message: "Password Must Be 11 Character Long." },
    {
      tester: /[a-z]/,
      message: "Password Must Contain Atleast One Lowercase Letter.",
    },
    {
      tester: /[A-Z]/,
      message: "Password Must Contain Atleast One Uppercase Letter.",
    },
    {
      tester: /[A-Z]/,
      message: "Password Must Contain Atleast One Uppercase Letter.",
    },
    { tester: /\d/, message: "Password Must Contain Atleast One Number." },
    {
      tester: /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/,
      message: "Password Must Contain Atleast One Special Character.",
    },
  ];

  return <></>;
};

export default PasswordPatterns;
