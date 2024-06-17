import { useState, useEffect, useRef } from "react";

const useOverflow = (ref: any) => {
  const [isOverflow, setIsOverflow] = useState(false);

  const checkOverflow = () => {
    if (ref.current) {
      setIsOverflow(
        ref.current.scrollHeight > ref.current.clientHeight ||
          ref.current.scrollWidth > ref.current.clientWidth
      );
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [ref]);

  return isOverflow;
};

export default useOverflow;
