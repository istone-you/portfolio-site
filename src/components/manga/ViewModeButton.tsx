import type { ViewMode } from "@/types/manga";

const buttonModes: Array<{
  label: string;
  mode: ViewMode;
}> = [
  { label: "全作品", mode: "series" },
  { label: "連載中/完結済", mode: "serialized" },
  { label: "雑誌別", mode: "magazine" },
  { label: "全冊", mode: "all" },
];

const ViewModeButton = ({
  viewMode,
  toggleViewMode,
}: {
  viewMode: string;
  toggleViewMode: (mode: ViewMode) => void;
}) => (
  <>
    {buttonModes.map((button) => (
      <button
        key={button.mode}
        onClick={() => toggleViewMode(button.mode)}
        className={`px-4 py-1 title-shadow text-sm ${
          viewMode === button.mode ? "tab-selected" : "tab-unselected"
        } vertical-label`}
      >
        {button.label}
      </button>
    ))}
  </>
);

export default ViewModeButton;
