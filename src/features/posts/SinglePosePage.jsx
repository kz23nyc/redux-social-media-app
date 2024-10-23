import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId));

  if (!post) {
    return <section><h2>Post not found!</h2></section>;
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
    </section>
  );
};


export default SinglePostPage;




