// Tag component
// This component is responsible for rendering the tags that are displayed

import { FC } from "react";
import { motion } from "framer-motion";

// Tag Props
interface TagProps {
    text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
    return (
        <motion.div
            className="inline-block px-2 py-2 border border-gray-100 text-gray-400 text-xs rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            {text}
        </motion.div>
    );
}

export default Tag;