import '../../App.css';

interface IBlogg {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IBloggPostsProps {
  bloggPosts: IBlogg[];
}

const BloggPosts = ({bloggPosts}: IBloggPostsProps) => (
<div className="blogg-post-container">
  <h3>Blogg posts</h3>
  <ol>
  {bloggPosts.map((postItem) => (
    <li key={postItem.id}>
      <h4>{postItem.title}</h4>
      <p>{postItem.body}</p>
    </li>
  ))}
  </ol>
</div>
)

export default BloggPosts
