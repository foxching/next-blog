import React from 'react'
import Image from 'next/image'
import classes from './hero.module.css'



export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.png" alt="an image shows Max" width={300} height={300} />
            </div>
            <h1>Max</h1>
            <p>I blog about web development -especially frontend angular or react</p>
        </section>
    )
}
