import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
};

const name = 'illia omelchenko';
const logoName = '@illia';
export const siteTitle = '@illia_om site';

const Layout = ({ children, home }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="@illia_om personal site"
                />
            </Head>
            <header className={styles.header}>
                <div className={styles.contentContainer}>
                    {home ? (
                        <>
                            <h1 className={utilStyles.heading2Xl}>{logoName}</h1>
                        </>
                    ) : (
                        <>
                            <h1 className={utilStyles.heading2Xl}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{logoName}</a>
                                </Link>
                            </h1>
                        </>
                    )}
                    <div className={styles.underline} />
                    <h1 className={utilStyles.heading2Xl}>om</h1>
                </div>
            </header>
            <main>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </main>
        </div>

    )
}

export default Layout