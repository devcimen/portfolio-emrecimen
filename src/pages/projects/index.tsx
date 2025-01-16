// Projects page component
// Lists all projects

import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { childVariants, containerVariants } from "@/utils/animationConfig";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";
import Head from "next/head";
import { FC } from "react";

const Projects: FC = () => {
    return (
        <>
            <Header />
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/assets/huhn.ico" />
                <meta name='theme-color' content='#242526' />
                <meta name='apple-mobile-web-app-status-bar-style' content='#242526' />
            </Head>
            <section className="text-gray-900 lg:px-6 lg:py-10 px-6 py-5">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={childVariants}
                        >
                            <ProjectCard
                                title={project.title}
                                tags={project.tags}
                                image={project.image}
                                video={project.video}
                                link={project.link}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Projects;
