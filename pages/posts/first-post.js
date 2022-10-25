import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import Script from "next/script";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First post</h1>
      <p>This is my first post</p>
      {/* <Image src="/images/profile.jpg" height={144} width={144} alt="Profile" /> */}
    </Layout>
  );
};

export default FirstPost;
