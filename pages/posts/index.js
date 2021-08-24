import Head from 'next/head';
import { Fragment } from 'react';
import AllPost from '../../components/posts/all-post'
import { getAllPosts } from "../../lib/posts-util"


export default function AllPostPage(props) {

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <AllPost posts={props.posts} />
        </Fragment>
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