import GalleryItem from "./GalleryItem";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const Gallery = () => {
 


  return (
    <>
      <section className="favourites absolute top-106 flex flex-col items-center w-screen">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          Our Favorites
        </h2>
        <hr className="border-2 border-slate-300 my-3 w-screen"/>
        <div className="w-screen overflow-auto mt-5">
        <div className="flex w-fit mx-4">
          <GalleryItem imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" imageText="Red Nike" title="Men's Tree Runner" description="Limited Color Edition, Pure Azure"/>
          <GalleryItem imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" imageText="Red Nike" title="Men's Tree Runner" description="Limited Color Edition, Pure Azure"/>
          <GalleryItem imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" imageText="Red Nike" title="Men's Tree Runner" description="Limited Color Edition, Pure Azure"/>
          <GalleryItem imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" imageText="Red Nike" title="Men's Tree Runner" description="Limited Color Edition, Pure Azure"/>
        </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
