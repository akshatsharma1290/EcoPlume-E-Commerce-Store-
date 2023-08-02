import loaderImg from "../../assets/loader.png";

const Loader = () => {
  return (
    <>
      <div className="bg-white flex justify-center items-center w-screen h-screen absolute top-0 z-40">
        <img
          src={loaderImg}
          className="h-24 animate-load"
          alt="Loading Image Animation"
        />
      </div>
    </>
  );
};

export default Loader;
