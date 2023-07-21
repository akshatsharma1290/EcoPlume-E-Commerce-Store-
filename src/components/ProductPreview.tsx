import { useSearchParams } from "react-router-dom"


const ProductPreview = () => {
   const [searchParams] = useSearchParams()
   const url = searchParams.get("imageUrl")
  
  return (
    <>
    <img src={url || ""} alt="" />
    </>
  )
}

export default ProductPreview
