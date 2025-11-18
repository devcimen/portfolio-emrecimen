// Tag component
// This component is responsible for rendering the tags that are displayed

import { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { animationConfig, animationConfigHover } from "@/utils/animationConfig";

// Tag Props
interface TagProps {
    text: string;
    type?: 'primary' | 'secondary' | 'primarySmall' | 'link';
    onClick?: (e?: React.MouseEvent) => void;
}

const Tag: FC<TagProps> = ({ text, type = 'primary', onClick }) => {
    const styles = {
        primary: "inline-block p-2 lg:p-4 border border-gray-100 text-gray-400 text-xs lg:text-2xl rounded-full",
        link: "inline-block p-2 lg:p-4 border border-gray-400 text-gray-400 text-xs lg:text-2xl rounded-full hover:border-gray-200 hover:text-gray-200 transition-colors cursor-pointer",
        secondary: "inline-block p-2 lg:p-16 lg:text-5xl lg:p-4 border border-gray-FFF text-gray-FFF text-base rounded-lg whitespace-nowrap",
        primarySmall: "inline-block p-2 lg:p-2 border border-gray-100 text-gray-400 text-xs rounded-full",
    };

    return (
        <motion.div
            className={`${styles[type]} flex items-center gap-2`}
            {...animationConfig}
            {...(type === 'secondary' ? animationConfigHover : {})}
            onClick={onClick}
            style={{ cursor: type === 'link' ? 'pointer' : 'default' }}
        >
            {(type === 'link') && (
                <ExternalLink size={20} />
            )}
            <span>{text}</span>

        </motion.div>
    );
}

export default Tag;