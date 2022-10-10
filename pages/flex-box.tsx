import styles from '../styles/flex-box.module.css'

const Home = () => {
    return (
        <>
            <div className={styles['flex-container']}>
                <div className={styles.item}>Item 1</div>
                <div className={styles.item}>Item 2</div>
                <div className={styles.item}>Item 3</div>
            </div>
        </>
    );
}

export default Home;