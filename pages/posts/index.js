function PostList({ posts }) {
  return (
    <div>
      <h1>Here are a List of posts</h1>
      {posts.map(post => {
        return (
            <div>
                <h2>{post.id} {post.title}</h2>
                <hr />
            </div>
        )
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
