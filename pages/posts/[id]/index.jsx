import postStyles from '../../../styles/Post.module.css';
import Comment from '../../../components/Comment/Comment';

const Post = ({ post, comments }) => {
  return (
    <main className='main'>
      <div className={ postStyles.post }>
        <img src="/images/bitmap.jpg" alt="example image" />
        <h1 className={postStyles.title}>{post.title}</h1>
        <div className='line'></div>
        {comments &&
          <div className={postStyles.comments}>
          {comments.length > 0 &&
            comments?.map((comment) => (
              <Comment name={comment.name} body={comment.body} email={comment.email} />
          ))}
          </div>
        }
      </div>
		</main>
	);
};

export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const paths = posts?.map((post) => ({
		params: { id: post.id.toString() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const postRes = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const commentsRes = await fetch(
		`https://jsonplaceholder.typicode.com/comments/?postId=${params.id}`
	);
  const post = await postRes.json();
  const comments = await commentsRes.json();
	return { props: { post, comments } };
}

export default Post;
