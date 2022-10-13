import Head from 'next/head';
import Link from 'next/link';
import Header from './header';

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
            <Header/>
            <main>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </main>
        </div>

    )
}

export default Layout