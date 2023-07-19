const ShoeAd = () => {
  return (
    <>
      <section className="mt-5">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBhbmQlMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Shoes"
        />
        <div className="flex flex-col items-center mt-4 font-outfit px-3 gap-2">
          <p className="font-bold text-3xl text-center">
            Summer Trips Need Super Packable Shoes
          </p>
          <p className="font-medium text-base text-center">
            We've got you covered 10,000 steps covered , easy.
          </p>
          <div className="buttons space-x-3 flex w-full">
            <button className="bg-black text-white px-4 py-3 w-1/2 cursor-pointer rounded-md uppercase">
              Shop Men
            </button>
            <button className="bg-black text-white px-4 py-3 w-1/2 cursor-pointer rounded-md uppercase">
              Shop Women
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoeAd;
