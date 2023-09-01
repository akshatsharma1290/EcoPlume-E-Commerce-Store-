import { AiFillCheckCircle } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";

type Password = {
  password: string;
};

export const Criterias = [
  { tester: /^.{8,}$/, message: "Must Contain Atleast 8 Characters." },
  {
    tester: /[a-z]/,
    message: "Must Contain Atleast One Lowercase Letter.",
  },
  {
    tester: /[A-Z]/,
    message: "Must Contain Atleast One Uppercase Letter.",
  },
  { tester: /\d/, message: "Must Contains Atleast One Number." },
  {
    tester: /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/,
    message: "Must Contains Atleast One Special Character.",
  },
];

const PasswordPatterns = ({ password }: Password) => {
  return (
    <>
    <section className="space-y-3 bg-slate-100 p-2 rounded-md">
      <h3>Criterias - </h3>
      {Criterias.map((pattern, index) => {
        return (
          <section key={index} className="flex items-center gap-1">
            {pattern.tester.test(password) ? (
              <AiFillCheckCircle />
            ) : (
              <FiXCircle />
            )}
            <p className="text-sm">{pattern.message}</p>
          </section>
        );
      })}
      </section>
    </>
  );
};

export default PasswordPatterns;
