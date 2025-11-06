import ArticleContent from "@/components/ArticleContent";
import RecommandedArticles from "@/components/RecommandedArticles";
import data from "@/data/data.json";
import formatSlug from "@/utils/formatSlug";
import { notFound } from "next/navigation";

const ArticleDetailsPage = ({ params: { title: slug } }) => {
  const article = data.find((a) => formatSlug(a.title) === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ArticleContent article={article} />

        <RecommandedArticles category={article.category} />
      </div>
    </div>
  );
};
export default ArticleDetailsPage;
