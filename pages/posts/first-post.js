import Link from 'next/link';
import Head from 'next/head'
import Script from 'next/script';
import Layout from '../../components/layout';

//I was supposed to delete this page, I decided not to do it because I already commented into the code here
export default function FirstPost() {
  return (
    <>
    {/* This Head component is imported above. It's a component that allows you to modify the regular head  */}
    <Layout>
    <Head>
     <title>First post</title>
    </Head>
    {/* Script is a component imported above - the link is a thrid party script */}
    {/* Stragedy controls when a third party script should load. lazyOnLoad tells next to load this script lazily during browser idle time */}
    {/* onLoad is run immidelty after the script has finished loading - the console log then tells us if it has been run */}
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    
      <h1>First Post</h1>
      <p>Hello, this is the page I was supposed to delete. I didn't want to because I already commented into the code so you can check that out.</p>
      <p>I made this website from a tutorial from Next.js. I really liked it and learned a lot by reading it all and taking notes while going through it. 
        It took rather long but it was expected, I wanted to learn as much as I could about Next.js while doing this poject.
        I really like Next.js and what it can do!</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Layout>
    </>
  );
}