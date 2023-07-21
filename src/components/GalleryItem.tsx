type GalleryItemProps = {
  imageUrl: string;
  altText: string;
  title: string;
};

const GalleryItem = ({ imageUrl, altText, title }: GalleryItemProps) => {
  return (
    <>
      <div className="item w-80 mx-1 overflow-hidden">
        <picture>
          <img
            className="w-80 h-56 rounded-tr-md rounded-tl-md transition-all"
            src={imageUrl}
            alt={altText}
          />
        </picture>
        <div className="shadow-lg shadow-slate-300 mb-4 px-5 py-6 rounded-bl-md rounded-br-md flex flex-col items-baseline font-outfit">
          <p className="font-medium text-xl text-slate-800 leading-7 whitespace-nowrap">
           {title}
          </p>
          <div className="buttons space-y-2 flex flex-col items-center w-full mt-3">
            <button className="bg-slate-900 btn-hover border-2 border-black transition-all text-white px-4 py-3 w-full cursor-pointer rounded-md uppercase">
              Shop Men
            </button>
            <button className="bg-slate-900 btn-hover border-2 border-black transition-all text-white px-4 py-3 w-full cursor-pointer rounded-md uppercase">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
