import Link from "next/link";
import styles from './footer.module.css';
import utilStyles from '../styles/utils.module.css';

const links = [
    { text: "twitter", url: "http://twitter.com/illia_om" },
    { text: "github", url: "https://github.com/illia-om" },
    { text: "linkedin", url: "https://www.linkedin.com/in/illia-omelchenko-967bb0145/" },
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={utilStyles.container}>
                <p>find me here:</p>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}><Link href={link.url}>{link.text}</Link></li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;