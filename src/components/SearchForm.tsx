import { useAppDispatch } from "../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { setSearchQuery } from "../store/searchQuerySlice";

type FormInput = {
  searchQuery: string;
};

const SearchForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const { searchQuery } = data;
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center gap-3"
      >
        <input
          className="w-[75vw] h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
          type="text"
          autoComplete="off"
          placeholder="Enter Search Term"
          {...register("searchQuery", { required: true, maxLength: 15 })}
        />
      <p
        onClick={() => {
          reset();
        }}
        className="text-slate-600 cursor-pointer"
      >
        cancel
      </p>
      </form>


      <div className="err px-9 mt-1">
        {errors.searchQuery?.type === "required" && (
          <span className="text-red-500">This field is required.</span>
        )}
        {errors.searchQuery?.type === "maxLength" && (
          <span className="text-red-500">Maximum length exceeded.</span>
        )}
      </div>
    </>
  );
};

export default SearchForm;
