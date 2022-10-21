import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const illia = '@illia';

type HeaderProps = {
    path?: string[]
}

const Header = ({ path }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={`${utilStyles.container} ${styles.container}`}>
                {path ? (
                    <>
                        <h1 className={utilStyles.headingXl}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>@illia_om</a>
                            </Link>
                        </h1>
                        <h1 className={utilStyles.headingXl}>/{path.join('/')}</h1>
                    </>

                ) : (
                    <>
                        <h1 className={utilStyles.headingXl}>{illia}</h1>
                        <h1 className={`${utilStyles.headingXl} ${styles.underline} ${utilStyles.deleteCharSpacing}`}>{Array(1000).fill('_')}</h1>
                        <h1 className={utilStyles.headingXl}>om</h1>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;