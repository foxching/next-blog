import PostGrid from "../posts/posts-grid"
import classes from "./featured-posts.module.css"

export default function FeaturedPosts({ posts }) {

    return (
        <section className={classes.latest}>
            <h2>All Featured Posts</h2>
            <PostGrid posts={posts} />
        </section>
    )
}
