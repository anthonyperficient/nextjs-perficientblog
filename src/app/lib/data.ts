import { BlogPost, Author } from "./definitions";

export async function fetchBlogPosts() {
    const blogPosts = await fetch('https://blogs.perficient.com/wp-json/wp/v2/posts');
    return (await blogPosts.json()) as Array<BlogPost>;
}

export async function fetchBlogPost(id: string) {
    const blogPost = await fetch(`https://blogs.perficient.com/wp-json/wp/v2/posts/${id}`);
    return (await blogPost.json()) as BlogPost;
}

export async function fetchAuthor(id: number) {
    const author = await fetch(`https://blogs.perficient.com/wp-json/wp/v2/users/${id}`);
    return (await author.json()) as Author;
}