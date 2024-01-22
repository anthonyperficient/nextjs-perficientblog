import { fetchBlogPosts } from "@/app/lib/data";
import { formatDate } from "@/app/lib/util";
import Image from 'next/image';

export default async function RecentPosts() {
    const posts = await fetchBlogPosts();
    return (
        <>
            <h4 className="fst-italic">Recent posts</h4>
            <ul className="list-unstyled">
                {
                    posts.slice(0, 3).map((post) => (
                        <li key={post.id}>
                            <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                <Image alt={post.title.rendered} src={post?.yoast_head_json?.og_image[0]?.url} width={1000} height={1000} sizes="100vw" style={{ width: '150px', height: 'auto', }} className="bd-placeholder-img" aria-hidden="true"></Image>
                                <div className="col-lg-8">
                                    <h6 className="mb-0">{post.title.rendered}</h6>
                                    <small className="text-body-secondary">{formatDate(post.date)}</small>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}