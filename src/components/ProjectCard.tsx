// Project card component
// Displays a project card

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Tag from "./Tag";
import { animationConfig, animationConfigSplit, animationConfigText } from "@/utils/animationConfig";

interface ProjectCard {
    title: string;
    tags: string[];
    image: string;
    video?: string;
    link: string;
}

const ProjectCard: FC<ProjectCard> = ({ title, tags, image, video, link }) => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="cursor-pointer rounded-lg overflow-hidden"
            onClick={() => router.push(link)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
        >
            <motion.div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                {isHovered && video ? (
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src={image || "/placeholder.png"}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                )}
            </motion.div>
            <motion.div className="py-4 flex flex-col gap-2" >
                <motion.p className="text-3xl text-gray-FFF" {...animationConfigText}>{title}</motion.p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Tag key={index} text={tag} type="primarySmall" />
                    ))}
                </div>
                <motion.div
                    className="w-full h-0.5 bg-gray-100 my-2"
                    {...animationConfigSplit}
                />
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;