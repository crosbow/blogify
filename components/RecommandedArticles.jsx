import data from "@/data/data.json";
import formatSlug from "@/utils/formatSlug";
import stripHtml from "@/utils/splitHtml";
import Image from "next/image";
import Link from "next/link";

const Article = ({ article }) => {
  const {
    title,
    author,
    date,
    category,
    description: htmlDescription,
  } = article;

  const descriptionText = stripHtml(htmlDescription)
    .slice(0, 120)
    .concat("...");

  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <Image
          src={author.avatar}
          alt={author.name}
          className="h-6 w-6 rounded-full mr-2"
          width={24}
          height={24}
        />
        <span className="text-sm font-medium">{author.name}</span>
      </div>
      <Link
        href={`/${formatSlug(title)}`}
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {title}
      </Link>
      <p className="text-gray-700 mb-4">{descriptionText}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{date}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{category}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

const RecommandedArticles = ({ category }) => {
  const matchedCategory = data.filter(
    (article) => article.category === category
  );

  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>
        {matchedCategory.map((article) => (
          <Article key={article} article={article} />
        ))}
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </section>
  );
};
export default RecommandedArticles;
