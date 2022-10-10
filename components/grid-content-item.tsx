import Link from 'next/link';

import styles from './grid-content-item.module.css';
import utilStyles from '../styles/utils.module.css';
import type { GridItem } from '../lib/home';

type GridContentItemProps = {
    itemData: GridItem
};

const GridContentItem = ({ itemData }: GridContentItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <p className={utilStyles.bodyText}>{itemData.description}</p>
            </div>
            <div className={styles.titleBox}>
                <div className={styles.container}>
                    <h3 className={utilStyles.headingMd}>
                        <Link href={itemData.link}>
                            {itemData.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default GridContentItem