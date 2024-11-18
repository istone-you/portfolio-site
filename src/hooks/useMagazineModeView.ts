import { useState } from "react";

const useMagazineModeView = (initialState: boolean = false) => {
  const [filterSerialized, setFilterSerialized] = useState(initialState);
  const [isReloading, setIsReloading] = useState(false);

  const handleToggle = () => {
    setIsReloading(true);
    setTimeout(() => {
      setFilterSerialized(!filterSerialized);
      setIsReloading(false);
    }, 300);
  };

  return { filterSerialized, isReloading, handleToggle };
};

export default useMagazineModeView;
