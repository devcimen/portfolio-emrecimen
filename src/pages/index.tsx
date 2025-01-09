// Home page of the application
// This page is the first page that the user sees when they visit the website

import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Tag from '@/components/Tag';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import { animationConfig, animationConfigSkills, animationConfigSplit, animationConfigText } from '@/utils/animationConfig';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            
                <Head>
                    <title>HomePage</title>
                    <link rel="icon" href="/assets/huhn.ico" />
                    <meta name='theme-color' content='#242526' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='#242526' />
                </Head>
                {/* Main section */}
                <section id='main' className="flex flex-col justify-between mb-10 lg:mb-32" style={{ minHeight: 'calc(100vh - 64px)' }}>
                    <div className='flex items-center justify-center' style={{ marginTop: '30vh' }}>
                        <motion.p
                            className="text-base lg:text-xl text-gray-FFF text-justify w-60 lg:w-72 leading-4 font-light"
                            {...animationConfig}
                        >
                            A SOFTWARE DEVELOPER BASED IN SWITZERLAND (SOLOTHURN)
                        </motion.p>
                    </div>

                    <div className='px-6 mb-4'>
                        <motion.h1
                            className="text-[12vw] lg:text-[13vw] font-semibold text-gray-FFF leading-none tracking-[0.02em] blur-sm lg:blur-md w-full"
                            style={{
                                whiteSpace: "nowrap",
                                letterSpacing: "0.01em",
                            }}
                            {...animationConfig}
                        >
                            EMRE CIMEN
                        </motion.h1>

                        <motion.div className="flex flex-row justify-between mt-6" {...animationConfig}>
                            <a href="https://github.com/devcimen" className="font-extralight lg:text-3xl hover:underline">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/emre-cimen-980257234/" className="font-extralight lg:text-3xl hover:underline">
                                LinkedIn
                            </a>
                            <a href="mailto:emre.cimen07@gmail.com" className="font-extralight lg:text-3xl hover:underline">
                                Email
                            </a>
                        </motion.div>
                    </div>
                </section>
                <motion.div
                    className="w-full h-0.5 lg:h-2 bg-gray-100"
                    {...animationConfigSplit}
                />
                {/* About section */}
                <section id='about' className="flex flex-col relative my-14 px-6 lg:my-32">
                    <div className='flex items-start w-full'>
                        <Tag text=".aboutme" type='primary' />
                        <div className="relative ml-auto">
                            <motion.div
                                className="w-[60vw] lg:w-[50vw] h-48 lg:h-[60vh] relative"
                                {...animationConfig}
                            >
                                <div className='w-full h-full grayscale'>
                                    <Image
                                        src="/photos/DSC02450.JPG"
                                        alt="Picture of Emre Cimen"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.h2
                        className="absolute top-36 left-6 lg:top-[25rem] transform -translate-y-1/2 translate-x-2 text-3xl lg:text-[6vw] lg:blur-sm font-semibold text-gray-FFF leading-tight text-blur-s"
                        {...animationConfigText}
                    >
                        I design <br /> and code websites.
                    </motion.h2>
                    <motion.p
                        className="lg:absolute text-base text-justify leading-2 lg:top-[3rem] lg:w-[40vw] lg:text-3xl text-gray-FFF font-extralight mt-10 relative z-10"
                        {...animationConfigText}
                    >
                        Driven by a fusion of art and coding, I specialize in web and mobile development, crafting elegant solutions that bridge functionality and visual finesse.
                        I value clean code as much as I value captivating visuals, believing that true digital mastery lies in the harmony of both.
                    </motion.p>

                </section>

                {/* Skills section */}
                <section id='skills' className="flex flex-col relative my-14 lg:my-32 px-6">
                    <div className='flex items-start w-full'>
                        <Tag text=".skills" type='primary' />
                    </div>
                    <div className='mt-6'>
                        <motion.div
                            className='flex flex-wrap gap-4 lg:gap-6 justify-start'
                            {...animationConfigSkills}
                        >
                            <Tag text="UX / UI" type="secondary" />
                            <Tag text="Frontend Development" type="secondary" />
                            <Tag text="Mobile Development" type="secondary" />
                            <Tag text="Design System" type="secondary" />
                            <Tag text="Data Modelling" type="secondary" />
                            <Tag text="Database Architecture" type="secondary" />
                            <Tag text="Backend Development" type="secondary" />
                            <Tag text="CI / CD" type="secondary" />
                        </motion.div>
                    </div>
                </section>

                <motion.div
                    className="w-full h-0.5 lg:h-2 bg-gray-100"
                    {...animationConfigSplit}
                />
            {/* </div> */}
        </Layout>
    );
};

export default Home;