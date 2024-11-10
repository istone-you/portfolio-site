const ViewModeButton = ({
  buttonModes,
  currentMode,
  toggleViewMode,
}: {
  buttonModes: Array<{
    label: string;
    mode: "series" | "all" | "serialized" | "magazine";
  }>;
  currentMode: string;
  toggleViewMode: (mode: "series" | "all" | "serialized" | "magazine") => void;
}) => (
  <>
    {buttonModes.map((button) => (
      <button
        key={button.mode}
        onClick={() => toggleViewMode(button.mode)}
        className={`px-4 py-1 title-shadow text-sm ${
          currentMode === button.mode ? "tab-selected" : "tab-unselected"
        }`}
      >
        {button.label}
      </button>
    ))}
  </>
);

export default ViewModeButton;
