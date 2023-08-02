import Buttons from "../Reusables/Buttons";

const ShoeAd = () => {
  return (
    <>
      <section className="my-7">
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
          <Buttons color={"black"} text={"white"}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoeAd;
