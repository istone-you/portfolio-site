const MagazineModeToggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div className="flex flex-col mb-4 justify-center items-center h-20">
      <span className="mb-2 text-md font-semibold">連載中のみ表示</span>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`relative w-12 h-6 rounded-full shadow-inner border-2 border-black transition-colors ${
            checked ? "bg-black border-black" : "bg-gray-300 border-gray-300"
          }`}
        >
          <div
            className={`absolute top-1/2 left-1 w-5 h-5 rounded-full shadow transform transition-transform bg-white ${
              checked
                ? "translate-x-5 -translate-y-1/2"
                : "-translate-x-1 -translate-y-1/2"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default MagazineModeToggle;
