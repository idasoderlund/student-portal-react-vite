function NewsPost({ post }) {
  return (
    <div className="mb-3 p3 border rounded">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}
export default NewsPost;
