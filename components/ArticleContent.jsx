import Image from "next/image";

const ArticleContent = ({ article }) => {
  const {
    title,
    author,
    date,
    category,
    description: htmlDescription,
  } = article;

  const descriptionMarkup = { __html: htmlDescription };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {title}
        </h1>

        <div className="flex items-center mb-6">
          <Image
            src={author.avatar}
            alt={author.name}
            className="h-12 w-12 rounded-full mr-4"
            height={48}
            width={48}
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium mr-2">{author.name}</span>
              <button className="text-green-600 text-sm font-medium">
                Follow
              </button>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span>{date}</span>
              <span className="mx-1">·</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="article-content"
        dangerouslySetInnerHTML={descriptionMarkup}
      />
    </>
  );
};
export default ArticleContent;
