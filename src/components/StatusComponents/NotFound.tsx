import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { loadingSelector } from "../../store/slices/loadingSlice";
import Loader from "../Reusables/Loader";

const NotFound = () => {
  const isLoading = useAppSelector(loadingSelector);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <section className="not-found flex flex-col mt-28 items-center font-outfit relative dark:text-white">
        <h1 className="font-bold text-8xl absolute">404</h1>
        <div className="-z-10">
          <img
            className="h-[32rem] object-cover dark:invert"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="404 Image"
          />
        </div>
        <div className="text-center absolute bottom-4">
          <h2 className="font-medium text-2xl font-kanit">
            Looks Like You are Lost
          </h2>
          <h3 className="font-light mt-1">
            The Page You Are Looking For Is Not Available!
          </h3>
          <div className="flex justify-center">
            <Link
              to={"/"}
              className="grid mt-3 place-content-center bg-emerald-600 font-bold tracking-wide text-white w-1/2 h-10"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
