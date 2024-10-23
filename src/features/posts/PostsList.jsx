import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  

  if (!posts) {
    return <div>Loading...</div>;
  }

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
