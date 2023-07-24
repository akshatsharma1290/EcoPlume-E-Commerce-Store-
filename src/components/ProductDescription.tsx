import generatePrice from "../utilities/generatePrice";
import generateRating from "../utilities/generateRating";
import toTitleCase from "../utilities/titleCase";

type ProductDescriptionProps = {
    category : string
    title : string 
    Imgurl : string
}

const ProductDescription = ({category , title , Imgurl} : ProductDescriptionProps) => {
  return (
    <>
      <div className="font-outfit flex justify-between items-center px-5 mt-3 text-xl">
        <h1 className="font-bold">{`${toTitleCase(category)} ${title}`}</h1>
        <h2>{generatePrice()}</h2>
      </div>
      <div className="font-outfit flex justify-between items-center gap-2 px-5 mt-2">
        {generateRating()}
        <span className="tag font-archivo uppercase bg-slate-200 px-2 py-1 text-sm tracking-wide rounded-sm">
          Free Shipping
        </span>
      </div>
      <div className="mt-5">
        <img src={Imgurl} alt={title} />
      </div>
    </>
  );
};

export default ProductDescription;
