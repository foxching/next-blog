import Link from 'next/link';
import Logo from "./logo"
import classes from "./main-navigation.module.css"


export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link href="/posts"> Posts</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
