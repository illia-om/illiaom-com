import Link from 'next/link';
import PBlock from './p-block';
import Image from 'next/image';

import styles from './simple-card.module.css';
import utilStyles from '../../styles/utils.module.css';

import type { GridItem } from '../../lib/home';


type GridContentItemProps = {
    itemData: GridItem
};

const Card = ({ itemData }: GridContentItemProps) => {
    return (
        <div className={styles.item + (itemData.backgroundImage ? (' ' + styles.heightForImage) : (''))}>
            {itemData.backgroundImage ? (
                <div className={styles.imgContainer}>
                    <Image alt='' className={styles.img} width={3} height={5} layout='responsive' src='/images/illia-portret-half.png'></Image>
                </div>
            ): <></>}
            <div className={styles.cardContentContainer + (itemData.backgroundImage ? (' ' + styles.marginForImage) : (''))}>
                <PBlock text={itemData.description}></PBlock>

            </div>
            <div className={styles.titleBox}>
                <div className={styles.container}>
                    <h3 className={utilStyles.bodyText + ' ' + utilStyles.bold}>
                        <Link href={itemData.link}>
                            {itemData.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default Card