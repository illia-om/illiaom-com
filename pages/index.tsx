import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';


const Home = ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Web Dev. DM for help with Notion API. Check my{' '}
          <a href="https://templates-by-illia.notion.site/Planner-template-d3a49f51c0c64e65a1cc498b8526a154">Planner template</a>
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
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

export default Home
