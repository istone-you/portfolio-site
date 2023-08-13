import { Link as Scroll } from "react-scroll";

import type { RepoCategories, RepoCategory } from "@/types/github";

const GitHubRepoCategoryList = ({
  repoCategories,
}: {
  repoCategories: RepoCategories;
}) => {
  return (
    <ul className="fade-in-second my-10 flex flex-wrap items-center justify-center">
      {repoCategories.map((repoCategory: RepoCategory) => (
        <li
          key={repoCategory.id}
          className="hover:cursor-pointer mb-2 flex items-center justify-center"
        >
          <Scroll to={repoCategory.name} smooth offset={-80} duration={600}>
            <button className="text-black bg-gray-300 px-4 py-1 font-bold border border-black button-shadow hover:text-black hover:shadow-none hover:translate-y-1 hover:translate-x-1">
              {repoCategory.name}
            </button>
          </Scroll>
        </li>
      ))}
    </ul>
  );
};

export default GitHubRepoCategoryList;
