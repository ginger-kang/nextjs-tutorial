import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요👋</p>
        <p>
          Next.js 튜토리얼을 참고하여 만든 웹사이트{" "}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>
        </p>
      </section>
      <Link href="/posts/first-post">
        <a>첫 포스트 &rarr;</a>
      </Link>
    </Layout>
  );
}
