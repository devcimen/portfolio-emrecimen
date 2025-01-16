// Tag component
// This component is responsible for rendering the tags that are displayed

import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig, animationConfigHover } from "@/utils/animationConfig";

// Tag Props
interface TagProps {
    text: string;
    type?: 'primary' | 'secondary';
}

const Tag: FC<TagProps> = ({ text, type = 'primary' }) => {
    const styles = {
        primary: "inline-block p-2 lg:p-4 border border-gray-100 text-gray-400 text-xs lg:text-2xl rounded-full",
        secondary: "inline-block p-2 lg:p-16 lg:text-5xl lg:p-4 border border-gray-FFF text-gray-FFF text-base rounded-lg whitespace-nowrap",
        primarySmall: "inline-block p-2 lg:p-2 border border-gray-100 text-gray-400 text-xxs lg:text-l rounded-full",
    };

    return (
        <motion.div
            className={styles[type]}
            {...animationConfig}
            {...(type === 'secondary' ? animationConfigHover : {})}
        >
            {text}
        </motion.div>
    );
}

export default Tag;