// Project detail page

import { FC } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Tag from "@/components/Tag";
import { projectDetails } from "@/utils/projects";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "@/components/Header";
import { animationConfig, animationConfigText } from "@/utils/animationConfig";
import { childVariants, containerVariants } from "@/utils/animationConfig";

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        description: string;
        tags: string[];
        images: string[];
        externalLink: string;
    };
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
            </Head>
            <Header />

            <section className="text-gray-FFF lg:px-6 lg:py-10 px-6 py-5">
                <motion.div className="flex flex-col gap-6">
                    {/* Project Title and Tags */}
                    <motion.div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2">
                        <motion.h1 className="lg:text-6xl text-3xl" {...animationConfigText}>
                            {project.title}
                        </motion.h1>
                        <motion.div className="flex flex-row gap-2">
                            {project.tags.map((tag, index) => (
                                <Tag key={index} text={tag} type="primary" />
                            ))}
                            {/* Project link tag */}
                            {project.externalLink && (
                                <Tag 
                                    text="Visit Project" 
                                    type="link" 
                                    onClick={() => window.open(project.externalLink, '_blank', 'noopener,noreferrer')}
                                />
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Project Description */}
                    <motion.p className="text-xl font-light text-gray-600 text-justify" {...animationConfigText}>
                        {project.description}
                    </motion.p>

                    {/* Responsive Image Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {project.images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="w-full h-[300px] sm:h-[450px] lg:h[600px] relative"
                                variants={childVariants}
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projectDetails.map((project) => ({
        params: { id: project.id },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectId = params?.id;
    const project = projectDetails.find((p) => p.id === projectId);

    if (!project) {
        return { notFound: true };
    }

    return { props: { project } };
};

export default ProjectDetail;
