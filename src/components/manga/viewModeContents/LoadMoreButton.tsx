import React from "react";

const LoadMoreButton = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => {
  if (!isVisible) return null;

  return (
    <button className="block mt-5 mx-auto group" onClick={onClick}>
      <div className="px-3 py-0.5 button-shadow">もっと見る</div>
    </button>
  );
};

export default LoadMoreButton;
