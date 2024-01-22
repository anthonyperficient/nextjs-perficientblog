import { BlogPost } from "@/app/lib/definitions";
import { formatDate } from "../lib/util";
import Image from "next/image";
import Link from 'next/link';

export default function BlogCard ({ post }: { post: BlogPost }) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <Image alt={post.title.rendered} src={post?.yoast_head_json?.og_image[0]?.url} width={100} height={100}  className="bd-placeholder-img card-img-top" role="img" aria-label="Placeholder: Thumbnail" />
                <div className="card-body">
                    <Link href={`/posts/${post.id}`} className="card-text">{post.title.rendered}</Link>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-body-secondary">{formatDate(post.date)}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}