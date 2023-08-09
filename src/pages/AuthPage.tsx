import AuthForm from "../components/AuthComponents/AuthForm";
import Loader from "../components/Reusables/Loader";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";

const AuthPage = () => {
  const isLoading = useAppSelector(loadingSelector);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="mt-24 font-outfit flex justify-center">
            <AuthForm />
          </section>
        </>
      )}
    </>
  );
};

export default AuthPage;
