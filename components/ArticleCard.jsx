import formatSlug from "@/utils/formatSlug";
import stripHtml from "@/utils/splitHtml";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  const {
    title,
    author,
    description: htmlDescription,
    date,
    category,
  } = article;

  const descriptionText = stripHtml(htmlDescription)
    .slice(0, 300)
    .concat("...");

  return (
    <article className="mb-10 pb-10 border-b border-gray-200 ">
      <div className="flex items-center mb-4">
        <Image
          src={author?.avatar}
          alt={author?.name}
          className="h-6 w-6 rounded-full mr-2"
          height={24}
          width={24}
        />
        <span className="text-sm font-medium">{author.name}</span>
      </div>
      <Link
        href={`/${formatSlug(title)}`}
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {title}
      </Link>
      <p className="text-gray-700 mb-4 article-content"> {descriptionText} </p>

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
export default ArticleCard;
