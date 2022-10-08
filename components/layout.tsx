import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
};

const name = 'illia omelchenko';
export const siteTitle = '@illia_om personal site-hub';

const Layout = ({ children, home }: LayoutProps) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon2.ico" />
                <meta
                    name="description"
                    content="illia_om site"
                />
            </Head>
            <header>
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                height={108}
                                width={108}
                            />
                        </a>
                    </Link>
                    <h2>
                        <Link href="/">
                            <a>{name}</a>
                        </Link>
                    </h2>
                </>
            </header>
            <main>
                {children}
            </main>
        </div>

    )
}

export default Layout