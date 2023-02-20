import Link from "next/link";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
    return (
        <div className="flex flex-col space-y-3">
            {posts.map(post => (
                <ClientSideRoute key={post._id} route={`/writing/${post.slug.current}`}>
                    <div className="flex flex-row justify-between py-6 rounded-md md:p-4 hover:bg-foreground dark:hover:bg-dark-foreground">
                        <div className="flex space-x-2">
                            <div>
                                <p className="text-text dark:text-dark-text">{post.title}</p>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <div>
                            <p className="text-muted dark:text-dark-muted">
                                {new Date(post._createdAt).toLocaleDateString
                                ("en-GB", {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                })}
                            </p>
                            </div>
                        </div>

                    </div>
            </ClientSideRoute>
            ))}
        </div>
    )
}

export default BlogList