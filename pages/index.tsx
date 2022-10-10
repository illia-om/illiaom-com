import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Layout, { siteTitle } from '../components/layout';
// import { getSortedPostsData } from '../lib/posts';
import { getHomeGridItems } from '../lib/home';

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/home.module.css';
import GridContentItem from '../components/grid-content-item';

const Home = ({
  gridItems
}: {
  gridItems: {
    id: string
    title: string
    description: string
    link: string
  }[]
}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainGrid}>
        {
          gridItems.map(gridItem => (
            <GridContentItem key={gridItem.id} itemData={gridItem}/>
          ))
        }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const gridItems = getHomeGridItems();
  return {
    props: {
      gridItems
    },
  };
}

export default Home
