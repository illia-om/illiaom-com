import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
type LayoutProps = {
    children: React.ReactNode;
    path?: string[];
};

const name = 'illia omelchenko';
const logoName = '@illia';
export const siteTitle = '@illia_om site';

const Layout = ({ children, path }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="@illia_om personal site"
                />
            </Head>
            <Header path={path}/>
            <main>
                {children}
            </main>
            <Footer />
        </div>

    )
}

export default Layout