import type { LanguageRate } from "@/types/github";

const GitHubLangRate = ({ langRate }: { langRate: LanguageRate }) => {
  const tableData = Object.keys(langRate)
    .map((key) => ({ language: key, value: langRate[key] }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="fade-in-second center">
      <div className="md:w-1/2 w-full mx-2 py-6 my-6 content-card">
        <h2 className="mb-10 center">
          <b>Most Used Language</b>
        </h2>
        {tableData.map((entry, index) => (
          <div key={`row-${index}`} className="mb-2 center">
            <b className="mr-4">{entry.language}</b>
            <b>{entry.value.toFixed(2)}%</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubLangRate;
