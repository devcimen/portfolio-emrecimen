import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className="bg-gray-000 text-gray-FFF flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Home Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="text-center">
                <div className='flex items-center justify-center mt-80'>
                    <p className="text-base text-gray-FFF text-justify w-60 leading-4 font-light">
                        A SOFTWARE DEVELOPER BASED IN SWITZERLAND (SOLOTHURN)
                    </p>
                </div>
                <h1 className="text-5xl font-semibold text-color-primary leading-6 tracking-tight text-blur mt-96">
                    EMRE CIMEN
                </h1>
                <div className="flex flex-row justify-between mt-6">
                    <a href="https://github.com/devcimen" className="font-extralight hover:underline">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/emre-cimen-980257234/" className="font-extralight hover:underline">
                        LinkedIn
                    </a>
                    <a href="mailto:emre.cimen07@gmail.com" className="font-extralight hover:underline">
                        Email
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;