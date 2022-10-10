import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Layout, { siteTitle } from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.css';


const Blog = ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <Layout>
      <Head>
        <title>@illia_om blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog
