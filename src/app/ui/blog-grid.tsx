import { ReactNode } from "react";
import { BlogPost } from "@/app/lib/definitions";
import BlogCard from "@/app/ui/blog-card";

export default function BlogGrid({ blogPosts }: { blogPosts: Array<BlogPost> }) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {blogPosts?.map((post) => (
                <BlogCard post={post} key={post.id} />
            ))}
        </div>
    );
}