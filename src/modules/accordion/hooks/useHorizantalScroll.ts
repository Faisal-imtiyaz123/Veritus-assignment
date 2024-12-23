
import { useState, useEffect } from "react";

const useHorizantalScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [isAtLeftEnd, setIsAtLeftEnd] = useState(true);
  const [isAtRightEnd, setIsAtRightEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollLeft, scrollWidth,clientWidth } = ref.current;
        setIsAtLeftEnd(scrollLeft==0);
        setIsAtRightEnd(scrollLeft+clientWidth==scrollWidth);
      }
    };

    const node = ref.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (node) {
        node.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  const scrollLeft = () => {
    if (ref.current) ref.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    if (ref.current) ref.current.scrollLeft += 100;
  };

  return { isAtLeftEnd,isAtRightEnd, scrollLeft, scrollRight };
};

export default useHorizantalScroll;
