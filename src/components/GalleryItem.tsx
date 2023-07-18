type GalleryItemProps = {
  imageUrl: string;
  imageText : string
  title : string
  description : string
};

const GalleryItem = ({ imageUrl, imageText , title , description }: GalleryItemProps) => {
  return (
    <>
      <div className="item w-80 mx-1">
        <picture>
          <img
            className="w-80 h-60 rounded-tr-md rounded-tl-md"
            src={imageUrl}
            alt={imageText}
          />
        </picture>
        <div className="shadow-lg shadow-slate-300 mb-4 px-5 py-6 rounded-bl-md rounded-br-md flex flex-col items-baseline font-outfit">
          <p className="font-medium text-2xl text-slate-800 leading-7">
           {title}
          </p>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
