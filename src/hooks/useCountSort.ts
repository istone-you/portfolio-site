import { useState } from "react";

const useCountSort = (initialState: boolean = false) => {
  const [sortByCount, setSortByCount] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  const handleToggle = () => {
    setIsReloading(true);
    setTimeout(() => {
      setSortByCount(!sortByCount);
      setIsReloading(false);
    }, 300);
  };

  return { sortByCount, isReloading, handleToggle };
};

export default useCountSort;
