// Home page of the application
// This page is the first page that the user sees when they visit the website

import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Tag from '@/components/Tag';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className="bg-gray-000 text-gray-FFF">
            <div className="flex flex-col min-h-screen mx-6">
                <Head>
                    <title>HomePage</title>
                    <link rel="icon" href="/assets/favicon.ico" />
                </Head>
                <Header />

                {/* Main section */}
                <section id='main'>
                    <div className='flex items-center justify-center mt-64'>
                        <motion.p
                            className="text-base text-gray-FFF text-justify w-60 leading-4 font-light"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            A SOFTWARE DEVELOPER BASED IN SWITZERLAND (SOLOTHURN)
                        </motion.p>
                    </div>
                    <motion.h1
                        className="text-5xl font-semibold text-color-primary leading-6 tracking-tight text-blur-l mt-96"
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 2, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        EMRE CIMEN
                    </motion.h1>
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

                {/* About section */}
                <section id='about' className="mt-20 flex flex-col relative mb-40">
                    <div className='flex items-start w-full'>
                        <Tag text=".aboutme" />
                        <div className="relative ml-auto">
                            <motion.div
                                className="w-60 h-48 relative"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <div className='w-full h-full grayscale'>
                                <Image
                                    src="/photos/000074390001.JPEG"
                                    alt="Picture of Emre Cimen"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.h2
                        className="absolute top-36 left-0 transform -translate-y-1/2 translate-x-2 text-3xl font-semibold text-gray-FFF leading-tight text-blur-s"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        I design <br /> and code websites.
                    </motion.h2>
                    <motion.p
                        className="text-base text-gray-300 leading-relaxed font-light mt-10 relative z-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Driven by a fusion of art and coding, I specialize in web and mobile development, crafting elegant solutions that bridge functionality and visual finesse.
                        I value clean code as much as I value captivating visuals, believing that true digital mastery lies in the harmony of both.
                    </motion.p>

                </section>
            </div>
        </div>
    );
};

export default Home;