import { news } from "../Data/news";
import NewsPost from "../Components/NewsPost";

function News() {
  return (
    <div>
      <h2>News</h2>
      {news.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </div>
  );
}
export default News;
