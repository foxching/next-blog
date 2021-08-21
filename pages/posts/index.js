import React from 'react'
import AllPost from '../../components/posts/all-post'
import { getAllPosts } from "../../lib/posts-util"


export default function AllPostPage(props) {

    return (
        <div>
            <AllPost posts={props.posts} />
        </div>
    )
}

export function getStaticProps() {
    const AllPosts = getAllPosts()

    return {
        props: {
            posts: AllPosts
        },
        revalidate: 60
    }
}