"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const categories = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
];

const Sidebar = () => {
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("categories")?.split(",") ?? []
  );
  const router = useRouter();

  const handleSelect = (category) => {
    let nextSelectedCategories;

    if (selectedCategories.includes(category)) {
      nextSelectedCategories = selectedCategories.filter((c) => c !== category);
      setSelectedCategories(nextSelectedCategories);
    } else {
      nextSelectedCategories = [...selectedCategories, category];
      setSelectedCategories(nextSelectedCategories);
    }

    const hasSortParam = searchParams.get("sortby") ?? "";

    if (nextSelectedCategories.length) {
      router.push(
        `/?categories=${nextSelectedCategories.join(",")}${
          hasSortParam && `&sortby=${hasSortParam}`
        }`
      );
    } else {
      router.push(`/${hasSortParam && `?sortby=${hasSortParam}`}`);
    }
  };
  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className={` ${
                  selectedCategories.includes(category)
                    ? "bg-green-200 hover:bg-gray-200"
                    : "bg-gray-200 hover:bg-green-200"
                }  font-medium px-4 py-2 rounded-full text-sm  transition-colors`}
              >
                {category.trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
            <Link href="#" className="hover:text-gray-700">
              Help
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Status
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Writers
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Careers
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-700">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
