type GalleryItemProps = {
  imageUrl: string;
  altText: string;
  title: string;
};

const GalleryItem = ({ imageUrl, altText, title }: GalleryItemProps) => {
  return (
    <>
      <div className="item w-80 mx-1">
        <picture>
          <img
            className="w-80 h-56 rounded-tr-md rounded-tl-md"
            src={imageUrl}
            alt={altText}
          />
        </picture>
        <div className="shadow-lg shadow-slate-300 mb-4 px-5 py-6 rounded-bl-md rounded-br-md flex flex-col items-baseline font-outfit">
          <p className="font-medium text-xl text-slate-800 leading-7">
            {title}
          </p>
          <div className="buttons space-y-2 flex flex-col items-center w-full mt-3">
            <button className="bg-black text-white px-4 py-3 w-full cursor-pointer rounded-md uppercase">
              Shop Men
            </button>
            <button className="bg-black text-white px-4 py-3 w-full cursor-pointer rounded-md uppercase">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
