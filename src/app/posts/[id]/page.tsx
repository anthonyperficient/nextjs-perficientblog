import { fetchBlogPost, fetchAuthor } from "@/app/lib/data";
import Image from 'next/image';
import RecentPosts from "@/app/ui/recent-posts";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const post = await fetchBlogPost(id);
    const author = await fetchAuthor(post.author)

    return (
        <div className="row g-5">
            <div className="col-md-8">
                <Image alt={post.title.rendered} src={post?.yoast_head_json?.og_image[0]?.url} width={1000} height={1000} sizes="100vw" style={{ width: '100%', height: 'auto', }} className="img-fluid mb-2" role="img" aria-label="Placeholder: Thumbnail" />
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    {post.title.rendered}
                </h3>

                <article className="blog-post" dangerouslySetInnerHTML={{__html: post.content.rendered}}>
                </article>



            </div>

            <div className="col-md-4">
                <div className="position-sticky" style={{ top: '2rem' }}>
                    <div className="p-4 mb-3 bg-body-tertiary rounded">
                        <h4 className="fst-italic">{author.name}</h4>
                        <p className="mb-0">
                            {author.description}
                        </p>
                    </div>

                    <div>
                        <RecentPosts />
                    </div>
                </div>
            </div>
        </div>
    );
}