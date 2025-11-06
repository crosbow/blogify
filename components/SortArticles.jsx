"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SortArticles = () => {
  const queryParams = useSearchParams();
  const router = useRouter();
  const [sortBy, setSortBy] = useState(queryParams.get("sortby") ?? "default");

  const handleSelection = (e) => {
    const selectedOption = e.target.value;

    setSortBy(selectedOption);

    const categoriesParam = queryParams.get("categories");
    const categoriesQuery = categoriesParam
      ? `?categories=${categoriesParam}`
      : "";

    const sortByParam = categoriesParam
      ? `&sortby=${selectedOption}`
      : `?sortby=${selectedOption}`;

    router.push(`/${categoriesQuery}${sortByParam}`);
  };
  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        value={sortBy}
        onChange={handleSelection}
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
      >
        <option disabled value="default">
          Sort
        </option>
        <option value="latest">Latest </option>
        <option value="oldest">Oldest </option>
      </select>
    </div>
  );
};
export default SortArticles;
