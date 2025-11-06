import ArticleCard from "@/components/ArticleCard";
import SortArticles from "@/components/SortArticles";
import data from "@/data/data.json";
import sort from "@/utils/sortArticles";

export default async function Home(req) {
  const categories = req.searchParams?.categories?.split(",");
  const sortBy = req.searchParams?.sortby;

  let filteredData = data;

  if (categories?.length > 0) {
    filteredData = data.filter((article) =>
      categories.includes(article.category)
    );
  }

  const sortedData = sortBy
    ? sort(filteredData, sortBy === "latest" ? "asc" : "dec")
    : filteredData;

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <SortArticles />
      </div>

      {sortedData.length > 0 &&
        sortedData.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}

      {!sortedData.length && (
        <div className="text-xl text-center my-20">Empty article</div>
      )}

      <div className="text-center">
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
          Load more
        </button>
      </div>
    </div>
  );
}
