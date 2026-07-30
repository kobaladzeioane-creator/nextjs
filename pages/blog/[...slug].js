import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
      <hr />
      <h3>მიმდინარე Router Query:</h3>
      <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(router.query, null, 2)}
      </pre>
    </div>
  );
}

export default BlogPostsPage;