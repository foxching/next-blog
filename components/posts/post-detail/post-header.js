import Image from 'next/image'
import classes from "./post-header.module.css"

export default function PostHeader({ title, image, }) {
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={300} height={300} layout="responsive" />
        </header>
    )
}