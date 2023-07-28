import { useAppDispatch, useAppSelector } from "../hooks";
import { paginationSelector, setPagination } from "../store/paginationSlice";

const PaginationBoxes = () => {
  const pagination = useAppSelector(paginationSelector);
  const dispatch = useAppDispatch();

  const paginationLength = 3;

  const updatePagination = (newPagination: number) => {
    dispatch(setPagination(newPagination));
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 1; i <= paginationLength; i++) {
      boxes.push(
        <div
          key={i}
          className={`${
            pagination === i ? "bg-white text-black" : "bg-black text-white"
          } px-5 py-2 font-bold text-lg border-2 border-black transition-all`}
          onClick={() => {
            updatePagination(i);
          }}
        >
          {i}
        </div>
      );
    }
    return boxes;
  };

  return (
    <>
      <div className="pagination flex mt-7 justify-center gap-5 pb-5">
        {renderBoxes()}
      </div>
    </>
  );
};

export default PaginationBoxes;
