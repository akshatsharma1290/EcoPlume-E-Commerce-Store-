import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

type ArrowProps = {
  transformValue: number;
  setTransformValue: React.Dispatch<React.SetStateAction<number>>;
};

const CarouselArrow = ({ transformValue, setTransformValue }: ArrowProps) => {
  const [currentItem, setCurrentItem] = useState(0);
  const totalItems = 6;
  const itemSize = 320;
  const itemsCanScroll = useRef<number | null>(null);
  const visibleItems = useRef<number | null>(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const itemsVisible = Math.floor(windowWidth / itemSize);
    itemsCanScroll.current = Math.ceil(totalItems / itemsVisible);
    visibleItems.current = itemsVisible;
  }, []);

  const handleLeftArrow = () => {
    if (currentItem === 0) return;
    setTransformValue(transformValue + itemSize);
    setCurrentItem(currentItem - 1);
  };

  const handleRightArrow = () => {
    if (itemsCanScroll.current) {
      if (currentItem > itemsCanScroll.current) return;
      setTransformValue(transformValue - itemSize);
      setCurrentItem(currentItem + 1);
    }
  };

  return (
    <section>
      <div
        className="absolute hidden sm:block top-52 left-4 cursor-pointer shadow-xl z-10"
        onClick={handleLeftArrow}
      >
        <aside className="left-arrow w-12 bg-white h-12 flex justify-center items-center shadow-xl shadow-slate-700 rounded-full">
          <span className="dark:text-black">
            <BiSolidLeftArrow />
          </span>
        </aside>
      </div>
      <div
        className="absolute hidden sm:block top-52 right-4 cursor-pointer shadow-xl z-10"
        onClick={handleRightArrow}
      >
        <aside className="right-arrow w-12 bg-white h-12 flex justify-center items-center shadow-xl shadow-slate-700 rounded-full">
          <span className="dark:text-black">
            <BiSolidRightArrow />
          </span>
        </aside>
      </div>
    </section>
  );
};

export default CarouselArrow;
