import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-000">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my portfolio site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl text-center text-blue-600 font-bold">
          Welcome to My Portfolio!
        </h1>
        
        <p className="mt-3 text-2xl">
          This is a simple homepage built with Next.js and styled with Tailwind CSS.
        </p>
        
        <div className="mt-6 text-lg">
          <a
            href="https://github.com"
            className="text-blue-500 hover:underline"
          >
            Check out my GitHub
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;