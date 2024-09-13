// Tag component
// This component is responsible for rendering the tags that are displayed

import { FC } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/utils/animationConfig";

// Tag Props
interface TagProps {
    text: string;
    type?: 'primary' | 'secondary';
}

const Tag: FC<TagProps> = ({ text, type = 'primary' }) => {
    const styles = {
        primary: "inline-block px-2 py-2 border border-gray-100 text-gray-400 text-xs rounded-full",
        secondary: "inline-block px-2 py-2 border border-gray-FFF text-gray-FFF text-base rounded-lg"
    };

    return (
        <motion.div
            className={styles[type]}
            {...animationConfig}
        >
            {text}
        </motion.div>
    );
}

export default Tag;