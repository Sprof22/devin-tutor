
function PostItem({post}) {
  return (
    <div>PostItem</div>
  )
}

export default PostItem

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
  
    return {
      props: {
        post: data,
      },
    };
  }
  