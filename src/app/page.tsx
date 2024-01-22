import { fetchBlogPosts } from "./lib/data";
import BlogGrid from "@/app/ui/blog-grid"

export default async function Page() {
  const blogPosts = await fetchBlogPosts();
  return (
    <>
      <div className="text-center">
        <h1>Expert Insights. Provocative Thinking.</h1>
        <p>Our teams in the U.S., Latin America, and India, and our colleagues around the world, share the latest on how you can embrace digital to power your growth and deliver exceptional experiences. Join the conversation.</p>
      </div>
      <div>
        <BlogGrid blogPosts={blogPosts} />
      </div>
    </>
  );
}
