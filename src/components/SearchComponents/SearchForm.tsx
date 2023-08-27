import { useRef, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import { BsSearch } from "react-icons/bs";

type FormInput = {
  searchQuery: string;
};

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const { searchQuery } = data;
    dispatch(setSearchQuery(searchQuery));
  };

  useEffect(() => {
    setTimeout(() => {
      formRef.current ? formRef.current.focus() : null;
    }, 10);
  }, []);

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center gap-3"
        ref={formRef}
        tabIndex={-1}
      >
        <input
          className="w-[75vw] h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
          type="text"
          autoComplete="off"
          placeholder="Enter Search Term"
          {...register("searchQuery", { required: true, maxLength: 40 })}
        />
        <button
          type="submit"
          className="bg-slate-200 text-black cursor-pointer w-12 text-lg h-12 rounded-md grid place-content-center"
        >
          <BsSearch />
        </button>
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
