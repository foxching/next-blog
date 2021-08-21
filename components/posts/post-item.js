import Link from 'next/link'
import Image from 'next/image'
import classes from "./post-item.module.css"

export default function PostItem({ post }) {
    const { title, date, excerpt, image, slug } = post;


    const formatedDate = new Date(date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div>
                        <Image src={imagePath} alt={title} width={300} height={300} layout="responsive" />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formatedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li >

    )
}
